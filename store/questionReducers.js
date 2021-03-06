import {
  SET_USERANSWER,
  SET_CORRECTANSWER,
  SET_QUESTIONS
} from "./questionActions";

const initialState = {
  questions: [],
  userAnswer: "",
  correctAnswer: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case SET_USERANSWER:
      return {
        ...state,
        userAnswer: action.answer
      };
    case SET_CORRECTANSWER:
      return {
        ...state,
        correctAnswer: action.correctAnswer
      };
    default:
      return state;
  }
};
