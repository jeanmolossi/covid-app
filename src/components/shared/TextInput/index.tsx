import React from "react";
import { TextInputProps as RNTextInputProps } from "react-native";
import {
  InputController,
  IconBox,
  TextInput as TextInputComponent,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type TextInputProps = RNTextInputProps & {
  icon: string;
};

const TextInput = ({ icon, ...rest }: TextInputProps) => {
  return (
    <InputController>
      <IconBox>
        <FontAwesome name={icon} color="#fff" size={24} />
      </IconBox>
      <TextInputComponent placeholderTextColor="#f7f7f7" {...rest} />
    </InputController>
  );
};

export default TextInput;
