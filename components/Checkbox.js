import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import RadioButton from "./RadioButton";

const CheckBoxCustom = props => {
  const [isChecked, setIsChecked] = useState(false);
  const correctAnswer = useSelector(state => state.questions.correctAnswer);

  const checkHandler = () => {
    setIsChecked(isChecked => !isChecked);
    props.checkAnswer(props.answer);
  };

  let bgColor;
  if (props.answered) {
    if (props.answer === correctAnswer) {
      bgColor = "lightgreen";
    } else if (isChecked) {
      bgColor = "orange";
    }
  }

  return (
    <TouchableOpacity onPress={checkHandler} disabled={props.touchableDisabled}>
      <View
        style={{
          ...styles.screen,
          backgroundColor: bgColor
        }}
      >
        <RadioButton selected={isChecked} />
        <View>
          <Text style={styles.answerText}>{props.answer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    marginHorizontal: 4,
    marginVertical: 10,
    alignItems: "center"
  },
  answerText: {
    paddingHorizontal: 10
  }
});

export default CheckBoxCustom;
