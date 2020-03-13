import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

const QuestionForm = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{props.question}</Text>
        <Text style={styles.questionText}>{props.addToQuestion}</Text>
        {props.answers.map(answer => (
          <Checkbox answer={answer} />
        ))}
      </View>
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
