import React from "react";
import { View } from "react-native";
import { MainContainer, Text } from "../../components";
import { ScreenRouteProps } from "../../routes/DrawerNavigator/types";

import { Container } from "./styles";

type NotificationsProps = ScreenRouteProps<"Notifications">;

const Notifications = ({ ...rest }: NotificationsProps) => {
  return (
    <MainContainer>
      <Container>
        <Text h2>Suas notificações</Text>
      </Container>
    </MainContainer>
  );
};

export default Notifications;
