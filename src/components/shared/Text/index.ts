import { TextProps as RNTextProps } from "react-native";
import styled, { css } from "styled-components/native";

type TextProps = RNTextProps & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;

  bold?: boolean;
  medium?: boolean;
  regular?: boolean;

  color?: string;
};

const h1Styles = css`
  font-family: "Montserrat_700";
  font-size: 48px;
`;
const h2Styles = css`
  font-family: "Montserrat_700";
  font-size: 36px;
`;
const h3Styles = css`
  font-family: "Montserrat_700";
  font-size: 24px;
`;
const h4Styles = css`
  font-family: "Montserrat_700";
  font-size: 18px;
`;
const h5Styles = css`
  font-family: "Montserrat_700";
  font-size: 14px;
`;
const h6Styles = css`
  font-family: "Montserrat_700";
  font-size: 12px;
`;

const boldStyles = css`
  font-family: "Montserrat_700";
`;

const mediumStyles = css`
  font-family: "Montserrat_500";
`;

const regularStyles = css`
  font-family: "Montserrat_400";
`;

export default styled.Text<TextProps>`
  font-family: "Montserrat_500";

  color: ${(props) => (props.color ? props.color : "#ffffff")};

  ${(props) => props.h1 && h1Styles}
  ${(props) => props.h2 && h2Styles}
  ${(props) => props.h3 && h3Styles}
  ${(props) => props.h4 && h4Styles}
  ${(props) => props.h5 && h5Styles}
  ${(props) => props.h6 && h6Styles}
  
  ${(props) => props.bold && boldStyles}
  ${(props) => props.medium && mediumStyles}
  ${(props) => props.regular && regularStyles}
`;
