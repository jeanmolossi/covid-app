import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

type DrawerItemType = {
  key: string | number;
  label?: string;
  navigateScreen: string;
  icon(): JSX.Element;
};

const defaultIconStyle = {
  color: "#fff",
  size: 16,
};

export default [
  {
    key: "1",
    label: "Início",
    navigateScreen: "Home",
    icon: () => <FontAwesome name="dashboard" {...defaultIconStyle} />,
  },
  {
    key: "2",
    label: "Estatistícas",
    navigateScreen: "Statistics",
    icon: () => <FontAwesome name="line-chart" {...defaultIconStyle} />,
  },
] as DrawerItemType[];
