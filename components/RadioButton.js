import React from "react";
import { View, StyleSheet } from "react-native";

const RadioButton = props => {
  return (
    <View style={{ ...styles.outerCircle, ...props.style }}>
      {props.selected ? <View style={styles.innerCircle} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "lightblue"
  }
});

export default RadioButton;
