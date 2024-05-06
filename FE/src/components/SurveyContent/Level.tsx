import { useSurveyStore } from "@/store/survey";
import * as S from "./Level.styles";

export default function Level() {
  const {setSurveyContent, addAnswer, levelQuestions } = useSurveyStore((state) => ({
    setSurveyContent: state.setSurveyContent,
    addAnswer: state.addAnswer,
    levelQuestions: state.levelQuestions
  }));

  const handleCheck = (idx: number) => {
    setSurveyContent("position");
    addAnswer(idx)
  };

console.log(levelQuestions,'a');

  return (
    <>
      <S.TextWrapper>
        <S.TitleText>{levelQuestions[0].title}</S.TitleText>
      </S.TextWrapper>
      <S.SubTextWrapper>
        {
          levelQuestions[0].answer.map((answer, idx) => (
            <S.SubText
              key={idx}
              onClick={() => handleCheck(idx)}
            >
              {answer}
            </S.SubText>
          ))
        }
      </S.SubTextWrapper>
    </>
  );
}
