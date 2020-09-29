import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleProp, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

export type RootDrawerScreen = {
  StackNavigator: undefined;
};

export type ScreenRouteProps<T extends keyof AuthAppScreens> = {
  route: RouteProp<AuthAppScreens, T>;
  navigation: StackNavigationProp<AuthAppScreens, T>;
};

export type AuthAppScreens = {
  Home: undefined;
  Notifications: undefined;
  Statistics: undefined;
};

export type DrawerRouterScreenProps = {
  route: RouteProp<RootDrawerScreen, "StackNavigator">;
  navigation: StackNavigationProp<RootDrawerScreen, "StackNavigator">;
  style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
};

export type DrawerNavigationProps = DrawerNavigationProp<AuthAppScreens>;
