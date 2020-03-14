import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import RadioButton from "./RadioButton";

const CheckBoxCustom = props => {
  const [isChecked, setIsChecked] = useState(false);

  let coloredAnswer;
  const checkHandler = () => {
    coloredAnswer = "";
    setIsChecked(isChecked => !isChecked);
    props.checkAnswer(props.answer);
  };

  if (isChecked && props.answered === "correct") {
    coloredAnswer = "lightgreen";
  } else if (isChecked && props.answered === "wrong") {
    coloredAnswer = "orange";
  }

  return (
    <TouchableOpacity onPress={checkHandler} disabled={props.touchableDisabled}>
      <View style={{ ...styles.screen, backgroundColor: coloredAnswer }}>
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
