import { Container } from "../Container/Container";
import * as S from "./Header.styles";

export default function Header() {
  return (
    <Container>
    <S.NavbarWrapper>
      <S.LeftWrapper>
        <S.MenuButton />
        <S.Logo />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.SearchBarWarrper>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              data-v-c66fd358=""
              cx="10.5"
              cy="10.5"
              r="6"
              stroke="#222836"
            ></circle>
            <path
              data-v-c66fd358=""
              stroke="#222836"
              d="M14.354 14.646l4.949 4.95"
            ></path>
          </svg>
          <S.SearchInput placeholder="지역, 구장으로 찾기" />
        </S.SearchBarWarrper>
        <S.MyPageIcon/>
      </S.RightWrapper>
    </S.NavbarWrapper>
    </Container>
  );
}
