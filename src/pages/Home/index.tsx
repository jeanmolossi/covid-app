import React, { useEffect, useState } from "react";
import { Picker, StyleProp, TextStyle, Linking, Image } from "react-native";
import { Picker as CPicker } from "@react-native-community/picker";
import { MainContainer, Button, Text } from "../../components";
import { ScreenRouteProps } from "../../routes/DrawerNavigator/types";
import {
  Header,
  SelectBox,
  CountryText,
  HelpBox,
  TitleText,
  ButtonsContainer,
  Content,
  PreventionBox,
  ImagesBox,
  ImageContainer,
  ImageLabel,
  OwnTestBox,
  OwnTextImage,
  OwnTestTextBox,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

import distanceImage from "../../assets/distance.png";
import washHandsImage from "../../assets/washhands.png";
import maskImage from "../../assets/mask.png";
import womanImage from "../../assets/mulherzinha.png";
import { useAuth } from "../../hooks/Auth";

type HomeProps = ScreenRouteProps<"Home"> & {};

const Home = ({ ...rest }: HomeProps) => {
  const { user } = useAuth();

  return (
    <MainContainer>
      <Header>
        <Text h3>SeeData</Text>
        <SelectBox>
          <CountryText h4>{user.country}</CountryText>
        </SelectBox>
      </Header>

      <HelpBox>
        <TitleText h4>Você não está se sentindo bem ?</TitleText>
        <Text regular>
          Se você não está se sentindo bem e está com sintomas de c-v1d por
          favor ligue ou envie um SMS imediatamente para ajuda!
        </Text>

        <ButtonsContainer>
          <Button
            text="Ligue já"
            variants="red"
            icon="phone"
            onPress={() => Linking.openURL("tel:136")}
          />
          <Button
            text="Envie SMS"
            variants="blue"
            icon="comment"
            onPress={() => Linking.openURL("tel:136")}
          />
        </ButtonsContainer>
      </HelpBox>

      <Content>
        <PreventionBox>
          <Text h3 medium color="#000">
            Prevenção
          </Text>
          <ImagesBox>
            <ImageContainer>
              <Image source={distanceImage} />
              <ImageLabel>Mantenha distância</ImageLabel>
            </ImageContainer>

            <ImageContainer>
              <Image source={washHandsImage} />
              <ImageLabel>Lave bem as mãos</ImageLabel>
            </ImageContainer>

            <ImageContainer>
              <Image source={maskImage} />
              <ImageLabel>Use a PORRA da máscara</ImageLabel>
            </ImageContainer>
          </ImagesBox>
        </PreventionBox>

        <OwnTestBox>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#AEA1E5", "#56549E"]}
            style={{
              padding: 15,
              alignItems: "center",
              borderRadius: 16,
              bottom: 0,
              width: "100%",
              height: "80%",
              position: "absolute",
            }}
          />
          <OwnTextImage source={womanImage} />
          <OwnTestTextBox>
            <Text h4>Faça você mesmo o teste</Text>
            <Text>Siga as instruções para fazer você mesmo</Text>
          </OwnTestTextBox>
        </OwnTestBox>
      </Content>
    </MainContainer>
  );
};

export default Home;
