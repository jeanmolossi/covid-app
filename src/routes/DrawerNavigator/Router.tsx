import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import Animated from "react-native-reanimated";
import {
  DrawerRouterScreenProps,
  DrawerNavigationProps,
  AuthAppScreens,
} from "./types";
import { Button } from "../../components";
import { Home, Notifications, Statistics } from "../../pages";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator<AuthAppScreens>();

const DrawerRouter = ({ style }: DrawerRouterScreenProps) => {
  const { openDrawer, navigate } = useNavigation<DrawerNavigationProps>();

  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      elevation: 0,
      backgroundColor: "#473f97",
    },
    headerRight: () => (
      <Button
        variants="unfilled"
        text=" "
        icon="bell"
        onPress={() => navigate("Notifications")}
      />
    ),
    headerLeft: () => (
      <Button variants="unfilled" text=" " icon="bars" onPress={openDrawer} />
    ),
    headerTitle: () => null,
  };

  return (
    <Animated.View style={StyleSheet.flatten([styles.container, style])}>
      <Stack.Navigator {...{ screenOptions }}>
        <Stack.Screen name="Home">
          {(screenProps) => <Home {...screenProps} />}
        </Stack.Screen>

        <Stack.Screen name="Statistics">
          {(screenProps) => <Statistics {...screenProps} />}
        </Stack.Screen>

        <Stack.Screen name="Notifications">
          {(screenProps) => <Notifications {...screenProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    elevation: 5,
  },
});

export default DrawerRouter;
