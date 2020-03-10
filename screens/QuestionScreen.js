import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Platform,
  Button,
  ActivityIndicator,
  View
} from "react-native";
import Data from "../data/JS";
import Card from "../components/Card";
import QuestionForm from "../components/QuestionForm";

const QuestionScreen = props => {
  return (
    <FlatList
      data={Data}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Card>
          <QuestionForm
            question={itemData.item.question}
            addToQuestion={itemData.item.addToQuestion}
          />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default QuestionScreen;
