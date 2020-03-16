import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionActions.fetchQuestions());
  });

  const nextQuestionHandler = () => {
    if (currentQuestion + 1 < Data.length) {
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
      dispatch(
        questionActions.setCorrectAnswer(
          Data[currentQuestion + 1].correctAnswer
        )
      );
    }
  };

  const prevQuestionHandler = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion => currentQuestion - 1);
      dispatch(
        questionActions.setCorrectAnswer(
          Data[currentQuestion - 1].correctAnswer
        )
      );
    }
  };

  return (
    <Card>
      <QuestionForm
        question={Data[currentQuestion].question}
        addToQuestion={Data[currentQuestion].addToQuestion}
        answers={Data[currentQuestion].answers}
        correctAnswer={Data[currentQuestion].correctAnswer}
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
