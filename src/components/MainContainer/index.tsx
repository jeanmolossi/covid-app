import React, { ReactNode } from "react";
import { ViewProps } from "react-native";

import { Container } from "./styles";

type MainContainerProps = ViewProps & {
  children?: ReactNode;
};

const MainContainer = ({ children, ...rest }: MainContainerProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default MainContainer;
