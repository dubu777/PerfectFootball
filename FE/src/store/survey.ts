import { create } from "zustand";


interface Question {
  _id: string;
  title: string;
  question: string;
  answer: number[];
}

interface ISurveyState {
  surveyContent: string;
  steps: number;
  surveyAnswers: number[];
  surveyQuestions: Question[];
  levelQuestions: Question[];
  positionQuestions: Question[];
  playQuestions: Question[];
  teamQuestions: Question[];
  setSurveyContent: (content: string) => void;
  setSurveyQuestions: (questions: Question[]) => void;
  prevStep: () => void;
  addAnswer: (answer: number) => void;
}

export const useSurveyStore = create<ISurveyState>((set, get) => ({
  surveyContent: 'level',
  steps: 1,
  surveyAnswers: [],
  surveyQuestions: [],
  levelQuestions: [],
  positionQuestions: [],
  playQuestions: [],
  teamQuestions: [],
  setSurveyContent: (content) => set({ surveyContent: content }),
  setSurveyQuestions: (questions) => {
    const levelQuestions = questions.filter(q => q.title === 'level');
    const positionQuestions = questions.filter(q => q.title === 'position');
    const playQuestions = questions.filter(q => q.title === 'playstyle');
    const teamQuestions = questions.filter(q => q.title === 'teamstyle');
    set({ levelQuestions, positionQuestions, playQuestions, teamQuestions });
  },
  prevStep: () => set((state) => ({steps: state.steps - 1})),
  addAnswer: (answer) => {
    const currentAnswers = get().surveyAnswers;
    set({ surveyAnswers: [...currentAnswers, answer] });
  },
}));