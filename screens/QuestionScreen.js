import React, { useState, useEffect, useCallback } from "react";
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

const QuestionScreen = props => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestionHandler = () => {
    if (currentQuestion + 1 < Data.length) {
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
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
