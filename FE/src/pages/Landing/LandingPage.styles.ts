import styled from "styled-components"


export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  height: 100dvh;
  padding: 0 24px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: start;
  margin: 60px 0 50px 0;
`;

export const TitleText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #303030;
  margin-bottom: 10px;
  line-height: 1.3;
`;

export const SubText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #788391;
`;

export const Slider = styled.div`
  width: 100%;
  height: 284px;
  background-color: gray;
  border-radius: 15px;
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  z-index: 50;
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  padding: 24px;
`;

export const LoginButton = styled.button`
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
`;