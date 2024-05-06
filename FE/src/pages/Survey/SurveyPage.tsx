import StepBar from "@/components/StepBar/StepBar";
import * as S from "./SurveyPage.styles";
import Position from "@/components/SurveyContent/Position";
import Level from "@/components/SurveyContent/Level";
import { useSurveyStore } from "@/store/survey";
import { useGetSurveyData } from "@/apis/User/Queries/useGetSurveyquestion";

export default function Survey() {
  const { data } = useGetSurveyData();
  console.log(data);
  const surveyContent = useSurveyStore((state) => state.surveyContent);
  const surveyAnswers = useSurveyStore((state) => state.surveyAnswers);
console.log(surveyAnswers);

  const renderSurveyContent = () => {
    switch (surveyContent) {
      case "level":
        return <Level />;
      case "position":
        return <Position />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalWrapper>
          <StepBar totalSteps={5} />
          {renderSurveyContent()}
        </S.ModalWrapper>
      </S.ModalContainer>
    </S.Container>
  );
}
