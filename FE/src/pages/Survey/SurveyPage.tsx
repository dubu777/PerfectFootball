import StepBar from "@/components/StepBar/StepBar";
import * as S from "./SurveyPage.styles";

export default function Survey() {

  return (
    <S.Container>
    <S.ModalContainer>
      <S.ModalWrapper>
        <StepBar currentStep={2} totalSteps={4} />


      
      </S.ModalWrapper>
    </S.ModalContainer>
    </S.Container>
  );
}
