import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  background-color: #F4F4F4;
  padding: 0 10px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  margin-right: 7px;
`;

const Logo = styled.div`
  width: 70px;
  height: 50px;
  background-color: black;
`;

const SearchBarWarrper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 50px;
  background-color: white;
`;

const SearchInput = styled.input`
  color: #3e5463;
  font-size: 14px;
  background: none;
  border: none;
  vertical-align: super;
  width: calc(100% - 60px);
  padding: 0px;
  line-height: 24px;
`;

const MyPageIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  margin-left: 7px;
`;

export {
  NavbarWrapper,
  LeftWrapper,
  RightWrapper,
  MenuButton,
  Logo,
  SearchBarWarrper,
  SearchInput,
  MyPageIcon,
};
