import { useState } from "react";
import * as S from "./SignInPage.styles";
import { useAddSignIn } from "@/apis/User/Mutations/useAddSignIn";

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const AddSignInMutation = useAddSignIn();
  const handleSignIn = () => {
    AddSignInMutation.mutate({username, password})
  }

  return (
    <S.Container>
    <S.SignInContainer>
      <S.SignInWrapper>
        <S.TitleText>PERFECT FOOTBALL</S.TitleText>
        <S.SignInInput placeholder="아이디" onChange={(e) => setUsername(e.target.value)}/>
        <S.SignInInput type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
        <S.SignInButton onClick={handleSignIn}>내 팀 찾으러 가기</S.SignInButton>
      </S.SignInWrapper>
    </S.SignInContainer>
    </S.Container>
  );
}
