import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "./Checkbox";
import * as questionActions from "../store/questionActions";

const QuestionForm = props => {
  const [userAnswer, setUserAnswer] = useState();
  const [answered, setAnswered] = useState(false);
  const [isTouchableDisabled, setIsTouchableDisabled] = useState(false);

  const dispatch = useDispatch();

  const checkAnswerHandler = userAnswer => {
    setUserAnswer(userAnswer);
  };

  const checkAnswer = () => {
    dispatch(questionActions.setUserAnswer(userAnswer));
    setAnswered(true);
    setIsTouchableDisabled(true);
  };

  const nextQuestion = () => {
    setAnswered(false);
    props.nextQuestion();
    setIsTouchableDisabled(false);
  };

  const prevQuestion = () => {
    setAnswered(false);
    props.prevQuestion();
    setIsTouchableDisabled(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{props.question}</Text>
        <Text style={styles.questionText}>{props.addToQuestion}</Text>
        {props.answers.map(answer => (
          <Checkbox
            key={answer}
            answer={answer}
            checkAnswer={checkAnswerHandler}
            answered={answered}
            touchableDisabled={isTouchableDisabled}
          />
        ))}
      </View>
      <View style={styles.nextBtn}>
        <Button title="Check" onPress={checkAnswer} />
      </View>
      <View style={styles.nav}>
        <Button title="Prev" onPress={prevQuestion} />
        <Button title="Next" onPress={nextQuestion} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: {
    textAlign: "center",
    marginVertical: 4
  },
  nextBtn: {
    alignItems: "center"
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10
  }
});

export default QuestionForm;
