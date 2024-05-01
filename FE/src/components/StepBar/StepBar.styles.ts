import styled from "styled-components";

interface IActiveProp {
  $active: boolean;
}

export const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin: 0 0 50px 0;
`;

export const Step = styled.div<IActiveProp>`
  flex-grow: 1;
  height: 5px;
  border-radius: 3px;
  background-color: ${props => props.$active ? '#007BFF' : '#D0D0D0'}
`;