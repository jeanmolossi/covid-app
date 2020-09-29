import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerRouter from "./Router";
import DrawerContent from "./Content";
import Animated from "react-native-reanimated";
import { RootDrawerScreen } from "./types";

const { Navigator, Screen } = createDrawerNavigator<RootDrawerScreen>();

const DrawerNavigator = () => {
  const animatedNode = new Animated.Value<number>(0);
  const [progress, setProgress] = useState(animatedNode);

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -35],
  });

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyles = {
    borderRadius,
    transform: [{ scale, translateX }],
  };

  return (
    <Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{ flex: 1 }}
      backBehavior="history"
      drawerContent={(props) => {
        setProgress(props.progress as Animated.Value<number>);
        return <DrawerContent {...props} />;
      }}
      sceneContainerStyle={{ backgroundColor: "#4d79ff" }}
    >
      <Screen name="StackNavigator">
        {(screenProps) => (
          <DrawerRouter {...screenProps} style={animatedStyles} />
        )}
      </Screen>
    </Navigator>
  );
};

export default DrawerNavigator;
