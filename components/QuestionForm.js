import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Data from "../data/JS";

const QuestionForm = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{props.question}</Text>
        <Text style={styles.questionText}>{props.addToQuestion}</Text>
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
