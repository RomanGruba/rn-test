import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Platform, SafeAreaView, Button, View } from "react-native";
import QuestionScreen from "../screens/QuestionScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  // headerTitleStyle: {
  //   fontFamily: "open-sans-bold"
  // },
  // headerBackTitleStyle: {
  //   fontFamily: "open-sans"
  // },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const MainNavigator = createStackNavigator(
  {
    Question: QuestionScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

export default createAppContainer(MainNavigator);
