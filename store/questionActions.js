import Question from "../model/Question";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_USERANSWER = "SET_USERANSWER";
export const SET_CORRECTANSWER = "SET_CORRECTANSWER";

export const fetchQuestions = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://rn-test-84e8c.firebaseio.com/questions.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const resData = await response.json();
      const loadedData = [];
      for (const key in resData) {
        loadedData.push(
          new Question(
            resData[key].id,
            resData[key].theme,
            resData[key].subTheme,
            resData[key].question,
            resData[key].addToQuestion,
            resData[key].answers,
            resData[key].correctAnswer,
            resData[key].theory
          )
        );
      }
      dispatch({ type: SET_QUESTIONS, questions: loadedData });
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const setUserAnswer = userAnswer => {
  return { type: SET_USERANSWER, answer: userAnswer };
};

export const setCorrectAnswer = correctAnswer => {
  return { type: SET_CORRECTANSWER, correctAnswer: correctAnswer };
};
