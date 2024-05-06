import styled from "styled-components"


export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 0 20px;
`;

export const SubTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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
  color: #4D535B;
  padding: 15px 20px;
  margin: 5px 0;
  border-radius: 20px;
  cursor: pointer;
  line-height: 1.3;
  transition: background-color 0.3s ease-in-out;
  &:hover{
    background-color: #EBEBEB;
    color: #191B1E;
  }
`;


export const TempIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
