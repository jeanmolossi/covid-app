import React, { ReactNode } from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";
import { Button as ButtonComponent, TextButton } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export type ButtonProps = RectButtonProperties & {
  children?: ReactNode;
  text?: string;
  icon?: string;
  variants?: "white" | "blue" | "red" | "unfilled";
};

const Button = ({
  children,
  text,
  icon,
  enabled = true,
  variants = "white",
  ...rest
}: ButtonProps) => {
  return (
    <ButtonComponent {...{ enabled, variants }} {...rest}>
      {enabled && !enabled ? (
        <>
          <ActivityIndicator /> <TextButton>Aguarde</TextButton>
        </>
      ) : (
        <>
          {text ? (
            <>
              {icon && (
                <FontAwesome
                  name={icon}
                  size={24}
                  color={variants === "white" ? "#000" : "#fff"}
                  style={{ marginRight: 12 }}
                />
              )}
              <TextButton variants={variants}>{text}</TextButton>
            </>
          ) : (
            children
          )}
        </>
      )}
    </ButtonComponent>
  );
};

export default Button;
