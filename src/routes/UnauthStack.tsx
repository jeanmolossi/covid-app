import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Login, SignUp } from "../pages";

const { Navigator, Screen } = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const UnauthStack = () => {
  return (
    <Navigator {...{ screenOptions }}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default UnauthStack;
