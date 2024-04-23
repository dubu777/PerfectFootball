const express = require('express')
const app = express()
const cors = require('cors'); // CORS 미들웨어 import
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')
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

app.use(passport.initialize())
app.use(session({
  resave : false,
  saveUninitialized : false,
  secret: process.env.SESSION_PW,
  cookie : {maxAge : 1000 * 60 * 60},
  store: MongoStore.create({
    mongoUrl : process.env.DB_URL,
    dbName: 'forum',
  })
})) 

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


app.get('/', (req, res) => {
  res.send('반갑다')
})

app.get('/news', (req, res) => {
  // db.collection('post').insertOne({title: '첫 백엔드 데이터 넣기 성공!'})
  res.send('오늘 비옴')
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


  app.post('/user/info', async (req, res) => {
    try {
      if ( req.body.nickName == ''){
        res.status(400).send('닉네임미입력')
      } else {
        console.log(req.body);
        await db.collection('match').insertOne(req.body)
        res.status(200).send('성공');
      }
    } catch(error) {
      console.log(error);
      res.status(500).send('서버 에러 발생')
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

app.post('/login', async (요청, 응답, next) => {

  passport.authenticate('local', (error, user, info) => {
      if (error) return 응답.status(500).json(error)
      if (!user) return 응답.status(401).json(info.message)
      요청.logIn(user, (err) => {
        if (err) return next(err)
        응답.redirect('/')
      })
  })(요청, 응답, next)
})

// 회원가입 
app.post('/register', async (요청, 응답) => {
  let hash = await bcrypt.hash(요청.body.password, 10)
  await db.collection('user').insertOne({
    username : 요청.body.username,
    password : hash
  })
  
})


