import { Step, StepBarContainer } from "./StepBar.styles";


interface IStepProps {
  currentStep: number;
  totalSteps: number;
}

const StepBar = ({ currentStep, totalSteps }: IStepProps) => {
  return (
    <StepBarContainer>
      {/* Array.from에서 { length: totalSteps } 처럼 길이만 지정한 객체를 사용할 때, 
        배열은 정의된 길이만큼 빈 값(undefined)으로 초기화된다.
        이 메서드는 두 번째 인자로 map 메서드와 같이 (item, index) 를 받는다.
        active={i < currentStep} 로 불리언 값을 조정해서 조건부 스타일링을 한다.
        Array.from: 이 함수는 선언적이며, 배열을 생성하고 변환하는 로직이 한 줄에 들어 있어서 읽기 쉽다.
      */}
      {Array.from({ length: totalSteps }, (_, i) => (
        <Step key={i} $active={i < currentStep} />
      ))}
    </StepBarContainer>
  );
}



export default StepBar;