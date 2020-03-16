import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FlatList,
  StyleSheet,
  Text,
  Platform,
  Button,
  ActivityIndicator,
  View
} from "react-native";
import Data from "../data/JS";
import Card from "../components/Card";
import QuestionForm from "../components/QuestionForm";
import * as questionActions from "../store/questionActions";

const QuestionScreen = props => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const loadedQuestions = useSelector(state => state.questions.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionActions.fetchQuestions());
  }, [dispatch]);

  // console.log(loadedQuestions);
  const nextQuestionHandler = () => {
    if (currentQuestion + 1 < loadedQuestions.length) {
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
      dispatch(
        questionActions.setCorrectAnswer(
          loadedQuestions[currentQuestion + 1].correctAnswer
        )
      );
    }
  };

  const prevQuestionHandler = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion => currentQuestion - 1);
      dispatch(
        questionActions.setCorrectAnswer(
          loadedQuestions[currentQuestion - 1].correctAnswer
        )
      );
    }
  };

  console.log(loadedQuestions[0]);

  if (loadedQuestions.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <Card>
      <QuestionForm
        question={loadedQuestions[currentQuestion].question}
        addToQuestion={loadedQuestions[currentQuestion].addToQuestion}
        answers={loadedQuestions[currentQuestion].answers}
        correctAnswer={loadedQuestions[currentQuestion].correctAnswer}
        nextQuestion={nextQuestionHandler}
        prevQuestion={prevQuestionHandler}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default QuestionScreen;
