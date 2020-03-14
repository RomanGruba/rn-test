import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Checkbox from "./Checkbox";

const QuestionForm = props => {
  const [userAnswer, setUserAnswer] = useState();
  const [answered, setAnswered] = useState();
  const [isTouchableDisabled, setIsTouchableDisabled] = useState(false);

  const checkAnswerHandler = userAnswer => {
    setUserAnswer(userAnswer);
  };

  const nextHandler = () => {
    if (userAnswer === props.correctAnswer) {
      setAnswered("correct");
      props.nextQuestion();
      setAnswered();
    } else {
      setAnswered("wrong");
      setIsTouchableDisabled(true);
    }
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
      <Button title="Next" onPress={nextHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: {
    textAlign: "center",
    marginVertical: 4
  }
});

export default QuestionForm;
