import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import { useAuth } from "../hooks/Auth";
import DrawerNavigator from "./DrawerNavigator";
import UnauthStack from "./UnauthStack";

enableScreens();

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {!!user.email ? <DrawerNavigator /> : <UnauthStack />}
    </NavigationContainer>
  );
};

export default Routes;
