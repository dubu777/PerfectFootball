import { useNavigate } from 'react-router-dom';
import * as S from './LandingPage.styles';

export default function LandingPage() {
const navigate = useNavigate();

  return(
    <S.LandingContainer>
      <S.TextWrapper>
        <S.TitleText>나와 가장 잘맞는 완벽한 팀은 어디? </S.TitleText>
        <S.SubText>내 플레이스타일, 포지션에 맞는 최고의 팀을 찾아보세요</S.SubText>
      </S.TextWrapper>
      <S.Slider/>
      <S.Footer>
        <S.LoginButton onClick={() => navigate('/signup')}>내 팀 찾으러 가기</S.LoginButton>
      </S.Footer>
    </S.LandingContainer>
  )
}

