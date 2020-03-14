import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  CheckBox,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RadioButton from "./RadioButton";

const CheckBoxCustom = props => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(isChecked => !isChecked);
    props.checkAnswer(props.answer);
  };

  let coloredAnswer;
  if (isChecked && props.answered === "correct") {
    coloredAnswer = "green";
  } else if (isChecked && props.answered === "wrong") {
    coloredAnswer = "orange";
  }

  return (
    <TouchableOpacity onPress={checkHandler} disabled={props.touchableDisabled}>
      <View style={styles.screen}>
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
