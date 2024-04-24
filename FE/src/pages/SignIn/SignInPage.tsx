import { useNavigate } from "react-router-dom";
import * as S from "./SignInPage.styles";

export default function SignInPage() {
  const navigate = useNavigate()
  return (
    <S.Container>
    <S.SignInContainer>
      <S.SignInWrapper>
        <S.TitleText>PERFECT FOOTBALL</S.TitleText>
        <S.SignInInput placeholder="아이디"/>
        <S.SignInInput placeholder="비밀번호"/>
        <S.SignInButton onClick={() => navigate('/')}>내 팀 찾으러 가기</S.SignInButton>
      </S.SignInWrapper>
    </S.SignInContainer>
    </S.Container>
  );
}
