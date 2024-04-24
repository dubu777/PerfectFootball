import styled from "styled-components"


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
  height: 430px;
  padding: 24px;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(190, 190, 190, 0.35);
`;

export const SignInWrapper = styled.div`
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
  border: 1px solid gray;
  outline-width: 1px;
  outline-color: rgb(35, 122, 242);
`;

export const SignInButton = styled.button`
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
`;