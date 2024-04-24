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
  height: 600px;
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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 50px 0 50px 0;
  width: 100%;
`;

export const TitleText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #303030;
  margin-bottom: 40px;
`;

export const SubText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #788391;
`;


export const PositionIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;