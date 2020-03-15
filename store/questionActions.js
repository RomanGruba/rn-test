export const SET_USERANSWER = "SET_USERANSWER";
export const SET_CORRECTANSWER = "SET_CORRECTANSWER";

export const setUserAnswer = userAnswer => {
  return { type: SET_USERANSWER, answer: userAnswer };
};

export const setCorrectAnswer = correctAnswer => {
  return { type: SET_CORRECTANSWER, correctAnswer: correctAnswer };
};
