interface IUserInfoProps {
  _id: string;
  title: string;
  content: string;
}

interface IUserInfo {
  username: string;
  password: string;
  nickname: string;
}

interface IMatchDataProps {
  username: string;
  playStyle: string;
}

interface IUserSignInInfo {
  username: string;
  password: string;
}

interface ISignInResponse {
  username: string;
  nickname: string;
}
