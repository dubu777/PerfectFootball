import styled, { keyframes, css } from "styled-components";

interface IActiveProp {
  $active: boolean;
}

const fillAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

export const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin: 0 0 50px 0;
  padding: 0 20px;
`;

// export const Step = styled.div<IActiveProp>`
//   flex-grow: 1;
//   height: 5px;
//   border-radius: 3px;
//   background-color: ${props => props.$active ? '#007BFF' : '#D0D0D0'}
// `;


export const Step = styled.div<IActiveProp>`
  flex-grow: 1;
  height: 5px;
  border-radius: 3px;
  background-color: #D0D0D0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    height: 100%;
    background-color: #007BFF;
    width: 0%;
    animation: ${props => props.$active ? css`${fillAnimation} 1s forwards` : 'none'};
  }
`;