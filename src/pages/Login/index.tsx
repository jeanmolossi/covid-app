import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Button, MainContainer, Text, TextInput } from "../../components";
import { useAuth } from "../../hooks/Auth";

import { FirstContainer, SecondContainer } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading } = useAuth();
  const { navigate } = useNavigation();

  return (
    <MainContainer>
      <FirstContainer>
        <Text h1 style={{ color: "#A9A0FD" }}>
          SeeData
        </Text>

        <KeyboardAvoidingView behavior="padding">
          <TextInput
            icon="user"
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            icon="lock"
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </KeyboardAvoidingView>
      </FirstContainer>

      <SecondContainer>
        <Button
          text="Acessar"
          icon="sign-in"
          enabled={!loading && !!email && !!password}
          onPress={() => signIn(email, password)}
        />

        <Button
          text="Não tem conta? Registre-se"
          variants="unfilled"
          onPress={() => navigate("SignUp")}
        />
      </SecondContainer>
    </MainContainer>
  );
};

export default Login;
