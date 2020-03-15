import { SET_USERANSWER, SET_CORRECTANSWER } from "./questionActions";

const initialState = {
  userAnswer: "",
  correctAnswer: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERANSWER:
      return {
        ...state,
        userAnswer: action.answer
      };
    case SET_CORRECTANSWER:
      console.log(action.correctAnswer);
      return {
        ...state,
        correctAnswer: action.correctAnswer
      };
    default:
      return state;
  }
};
