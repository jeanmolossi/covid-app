import styled, { css } from "styled-components/native";

type CardProps = {
  variant?: "orange" | "red" | "green" | "light-blue" | "purple";
};

const CardBackgroundVariant = {
  orange: css`
    background-color: #ffb259;
  `,

  red: css`
    background-color: #ff5959;
  `,

  green: css`
    background-color: #4cd97b;
  `,

  "light-blue": css`
    background-color: #4db5ff;
  `,

  purple: css`
    background-color: #9059ff;
  `,
};

export const SwitchBox = styled.View`
  padding: 0 24px;
`;

export const CardsBox = styled.View`
  margin: 16px;
`;

export const LineCardsBox = styled.View`
  flex-direction: row;
`;

export const Card = styled.View<CardProps>`
  flex: 1;
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  height: 120px;
  justify-content: space-between;

  ${(props) => CardBackgroundVariant[props.variant || "orange"]}
`;
