import styled, { css } from "styled-components"

interface IUserNameProps {
  $focused: boolean;  // 'focused' prop에 대한 타입 정의
}
interface SignInButtonProps {
  $isActive: boolean;  // 사용자 정의 속성 'enabled'에 대한 타입 정의
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background-color: #FAFAFA;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  max-width: 640px;
  min-width: 320px;
  height: 600px;
  padding: 24px;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(190, 190, 190, 0.35);
`;

export const SignInWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 30px;
`;

export const TitleText = styled.span`
  font-size: 35px;
  font-weight: 900;
  color: #303030;
  margin-bottom: 40px;
`;

export const SignInInput =styled.input`
  width: 100%;
  height: 58px;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 0 15px;
  border: 1.7px solid lightgray;
  outline-width: 1px;
  outline-color: rgb(35, 122, 242);
  font-size: 14px;
`;

export const UserNameInputWrapper = styled.div<IUserNameProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
  border: 1.7px solid lightgray;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 0 15px;
  ${props => props.$focused && css`  // 동적 스타일 적용
    border-color: rgb(35, 122, 242); // 포커스 상태일 때 파란색 테두리
  `}
`;

export const UserNameInput = styled.input`
  background: none;
  border: none;
  outline: none;
  vertical-align: super;
  width: calc(100% - 60px);
  font-size: 14px;
`;

export const DuplicateCheckButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    padding: 0px 10px;
    outline: none;
    width: 80px;
    height: 30px;
    background-color: #808080;
    color: rgb(255, 255, 255);
    border-radius: 10px;
`;

export const SignInButton = styled.button<SignInButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    padding: 0px 16px;
    outline: none;
    cursor: pointer;
    width: 100%;
    height: 56px;
    border-radius: 16px;
    background-color: rgb(35, 122, 242);
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 16px;
    margin-top: 40px;
    background-color: ${props => props.$isActive ? 'rgb(35, 122, 242)' : 'gray'};
    color: ${props => props.$isActive ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)'};
`;