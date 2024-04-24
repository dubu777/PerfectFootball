import { useNavigate } from "react-router-dom";
import * as S from "./SignUpPage.styles";
import { useState } from "react";

export default function SignUpPage() {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate()

  return (
    <S.Container>
    <S.SignInContainer>
      <S.SignInWrapper>
        <S.TitleText>PERFECT FOOTBALL</S.TitleText>
        <S.UserNameInputWrapper $focused={isFocused}>
            <S.UserNameInput
              placeholder="아이디"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
        <S.DuplicateCheckButton>중복확인</S.DuplicateCheckButton>
        </S.UserNameInputWrapper>
        <S.SignInInput placeholder="비밀번호"/>
        <S.SignInInput placeholder="비밀번호 확인"/>
        <S.SignInButton onClick={() => navigate('/survey')}>내 팀 찾으러 가기</S.SignInButton>
      </S.SignInWrapper>
    </S.SignInContainer>
    </S.Container>
  );
}
