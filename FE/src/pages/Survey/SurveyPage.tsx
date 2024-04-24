import { useNavigate } from "react-router-dom";
import * as S from "./SurveyPage.styles";

export default function Survey() {
  const navigate = useNavigate()
  return (
    <S.Container>
    <S.SignInContainer>
      <S.SignInWrapper>
        <S.TextWrapper>
        <S.TitleText>선호하는 포지션이 어디인가요?</S.TitleText>
        </S.TextWrapper>
      </S.SignInWrapper>
    </S.SignInContainer>
    </S.Container>
  );
}
