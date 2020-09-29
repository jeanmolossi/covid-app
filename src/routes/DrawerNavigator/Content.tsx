import { FontAwesome } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { Button } from "../../components";
import { useAuth } from "../../hooks/Auth";
import DrawerItems from "./DrawerItem";

const defaultDrawerItemStyle = {
  labelStyle: {
    fontSize: 16,
    color: "#fff",
    marginLeft: -18,
  },
};

const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  const { signOut } = useAuth();
  const { navigation } = props;
  const { navigate } = navigation;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#4d79ff",
      }}
      scrollEnabled={false}
    >
      {DrawerItems.map((item) => {
        let { label } = item;
        const { icon: Icon, key, navigateScreen } = item;

        label = label || navigateScreen;

        return (
          <DrawerItem
            onPress={() => navigate(navigateScreen)}
            {...{ key, label, icon: Icon }}
            {...defaultDrawerItemStyle}
          />
        );
      })}

      <DrawerItem
        label="Sair"
        icon={() => <FontAwesome name="sign-out" size={18} color="#fff" />}
        onPress={signOut}
        {...defaultDrawerItemStyle}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
