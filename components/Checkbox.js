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

  let bgColor;
  if (isChecked && props.answered === "correct") {
    bgColor = "green";
  } else if (isChecked && props.answered === "wrong") {
    bgColor = "orange";
  }

  return (
    <TouchableOpacity onPress={checkHandler}>
      <View style={styles.screen}>
        <RadioButton selected={isChecked} />
        <View style={{ backgroundColor: bgColor }}>
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
