import { Platform, Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const { height } = Dimensions.get("window");

const android = css`
  flex: 1;
  padding-top: 24px;
`;

const ios = css`
  padding-top: 26px;
`;

const styles = Platform.select({
  android,
  ios,
});

export const Container = styled.View`
  background-color: #473f97;

  ${styles}
`;
