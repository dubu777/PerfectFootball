import { getSurveyData } from '@/apis/User/userAPI';
import { useSurveyStore } from '@/store/survey';
import { useSuspenseQuery } from '@tanstack/react-query';




const useGetSurveyData = () => {
  const setSurveyQuestions = useSurveyStore(state => state.setSurveyQuestions)
  const { data } = useSuspenseQuery({
    queryKey: ['surveyData'],
    queryFn: () => getSurveyData(),
  });
  setSurveyQuestions(data);
  return data;
};

export { useGetSurveyData };
