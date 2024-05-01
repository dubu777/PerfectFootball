const express = require('express')
const app = express()
const cors = require('cors'); // CORS 미들웨어 import
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')
// 세션을 DB에 저장하는 라이브러리
const MongoStore = require('connect-mongo')
require('dotenv').config()

// 클라이언트가 보낸 데이터 꺼내쓰기 쉽게
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

// 요청을 허용할 도메인 (CORS) 설정
app.use(cors({
  origin: 'http://localhost:5173', // 요청을 허용할 도메인
  credentials: true  // Access-Control-Allow-Credentials 헤더를 true로 설정
}));


//session 회원가입 - passport 라이브러리 셋팅
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(session({
  resave : false,
  saveUninitialized : false,
  secret: process.env.SESSION_PW,
  cookie: {
    httpOnly: true, //크로스 사이트 스크립팅 (XSS) 방지: 만약 웹 애플리케이션이 XSS 공격을 받을 경우, 공격자가 스크립트를 통해 세션 쿠키를 도용할 수 있습니다. httpOnly 옵션을 활성화하면, 이러한 쿠키들은 클라이언트 측 스크립트에 의해 읽혀질 수 없으므로, 공격자가 사용자의 세션을 도용하는 것을 어렵게 만듭니다.
    secure: false, // HTTPS 환경에서만 적용. 개발 중에는 종종 false로 설정합니다. 배포시 true
    maxAge: 1000 * 60 * 60 * 24 // 24시간
  },
  store: MongoStore.create({
    mongoUrl : process.env.DB_URL,
    dbName: 'forum',
  })
})) 

app.use(passport.initialize())
app.use(passport.session()) 

let connectDB = require('./database')

let db;
connectDB.then((client)=>{
  console.log('DB연결성공')
// 접속에 성공하면 forum이라는 데이터베이스에 연결해라
  db = client.db('forum')
// 서버 띄우는 코드
  app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})
// 에러가나면 에러 출력해줘라
}).catch((err)=>{
  console.log(err)
})


  // async await 쓰는 이유 - js 는 동기적으로 처리하기 떄문에
  // 아래 통신 코드가 처리되기전에 아래에서 그 결과 값을 사용하면 에러가 발생한다.
  // 통신 코드가 완료되기 전에는 아래 코드를 실행하지 않게하는 비동기적 처리를 하기 위해서
  // await를 사용한다.
  // await은 promise를 반환하는 코드에만 사용할 수 있다.
  // db.collection('post').find().toArray() - post 컬렉션에있는 모든 데이터 출력
  app.get('/list', async (req, res) => {
    try {
      const result = await db.collection('post').find().toArray(); // post 컬렉션에서 모든 데이터를 배열로 조회
      console.log(result); // 결과 로깅
      res.json(result); // 조회된 데이터를 JSON 형태로 응답
    } catch (err) {
      console.error(err); // 에러 로깅
      res.status(500).send('서버 에러 발생');
    }
  })



//URL 파라미터 문법(상세페이지)

app.get('/match/:id', async (req, res) => {

  try{
    let result = await db.collection('post').findOne({_id : new ObjectId(req.params)})
    console.log(result, 'id로 가져오기');
    res.json(result)
    if( result === null) {
      res.status(400).send('이상한 url 입력함')
    }
  }catch(error) {
    res.status(400).send('이상한 url 넣었음')
  }

})


passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  let result = await db.collection('user').findOne({ username : 입력한아이디})
  if (!result) {
    return cb(null, false, { message: '아이디 DB에 없음' })
  }

  if (await bcrypt.compare(입력한비번, result.password)) {
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비번불일치' });
  }
}))

// 로그인 성공하면 세션 document 만들기, 쿠키를 유저에게 보내주기
// passport.serializeUser()
passport.serializeUser((user, done) => {
  process.nextTick(() => {
    done(null, { id: user._id, username: user.username })
  })
})

// 유저가 쿠키 제출시 확인해보기 - passport.deserializeUser()
// 세션정보 적힌 쿠키가지고 있는 유저가 요청 날릴때 마다 실행됨 - DB조회 발생 - 비효율적임
// => 특정 API에서만 deserializeUser 실행 가능
passport.deserializeUser(async (user, done) => {
  let result = await db.collection('user').findOne({_id : new ObjectId(user.id) })
  delete result.password
  process.nextTick(() => {
    return done(null, result)
  })
})

// 현재 로그인된 유저정보 출력 요청 - req.user

app.post('/user/signin', async (req, res, next) => {

  passport.authenticate('local', (error, user, info) => {
      if (error) return res.status(500).json(error)
      if (!user) return res.status(401).json(info.message)
      if (error) {
        return res.status(500).json({ error: '로그인 세션 저장 실패' });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ error: '로그인 세션 저장 실패' });
        }
        // 로그인 성공, 사용자의 username을 응답으로 보냄
        res.json({ message: '로그인 성공', username: user.username, nickname: user.nickname });
      });
  })(req, res, next)
})

// 회원가입 
app.post('/user/signup', async (req, res) => {
  console.log(res);
  let hash = await bcrypt.hash(req.body.password, 10)
  const result = await db.collection('user').insertOne({
    username: req.body.username,
    nickname: req.body.nickname,
    password: hash
  });

  // 새로 생성된 사용자의 ID를 사용하여 사용자 정보 조회
  const newUser = await db.collection('user').findOne({ _id: result.insertedId });
  req.login(newUser, err => {
    if (err) {
      res.status(500).send("로그인 실패");
    } else {
      res.json({ message: "회원가입 및 로그인 성공", newUser });
    }
  });
})


app.post('/check-username', async (req, res) => {
  const { username } = req.body;
  console.log(username, '중복확인 아이디');
  if (!username) {
    return res.status(400).json({ message: '아이디를 입력해주세요.' });
  }

  try {
    const user = await db.collection('user').findOne({ username: username });
    console.log(user);
    if (user) {
      return res.json({ message: 'failed', });
    } else {
      return res.json({ message: 'success' });
    }
  } catch (err) {
    console.error('DB 조회 중 오류 발생:', err);
    return res.status(500).json({ message: '서버 오류 발생' });
  }
});