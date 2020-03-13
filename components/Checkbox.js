import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  CheckBox,
  TouchableOpacity
} from "react-native";

const CheckBoxCustom = props => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(isChecked => !isChecked);
  };

  return (
    <TouchableOpacity onPress={checkHandler}>
      <View style={styles.screen}>
        <CheckBox value={isChecked} />
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
