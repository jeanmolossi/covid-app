import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

import { ButtonProps } from "./index";

type TextProps = {
  variants?: "white" | "blue" | "red" | "unfilled";
};

const buttonVariants = {
  white: css`
    background-color: #fff;
  `,
  blue: css`
    background-color: #4d79ff;
  `,
  red: css`
    background-color: #ff4d58;
  `,
  unfilled: css`
    background-color: transparent;
  `,
};

const textVariants = {
  white: css`
    color: #000;
  `,
  blue: css`
    color: #fff;
  `,
  red: css`
    color: #fff;
  `,
  unfilled: css`
    color: #fff;
  `,
};

export const Button = styled(RectButton)<ButtonProps>`
  padding: 12px 24px;
  border-radius: 50px;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;

  ${(props) => buttonVariants[props.variants || "white"]}
`;

export const TextButton = styled.Text<TextProps>`
  font-family: "Montserrat_500";
  font-size: 16px;

  ${(props) => textVariants[props.variants || "white"]}
`;
