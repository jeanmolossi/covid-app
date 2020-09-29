import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, Picker } from "react-native";
import { MainContainer, TextInput, Button, Text } from "../../components";
import api from "../../services/api";
import firebase from "../../services/firebaseService";

type CountryObject = {
  alpha2code: string;
  alpha3code: string;
  latitude: number;
  longitude: number;
  name: string;
};

import { FirstContainer, SecondContainer, CountryBox } from "./styles";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Brazil");
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([] as string[]);

  const { navigate } = useNavigation();

  const handleSignUp = useCallback(async () => {
    if (!email || !name || !password) {
      Alert.alert("Por gentileza,", "Preencha todos os campos");
      return;
    }
    setLoading(true);

    let user;
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      user = response.user;
    } catch (error) {
      Alert.alert("Deu ruim", "Ocorreu um erro ao fazer o cadastro");
      setLoading(false);
    }

    if (!user) {
      setLoading(false);
      return;
    }

    await firebase.database().ref("users").child(user.uid).set({
      name,
      email,
      password,
      country,
    });

    navigate("Login");
    setLoading(false);
  }, [name, email, password, country]);

  useEffect(() => {
    api.get<CountryObject[]>("/help/countries").then((response) => {
      const countryNames = response.data.map(
        (countryObject) => countryObject.name
      );

      setCountryList(countryNames);
    });
  }, []);

  return (
    <MainContainer>
      <FirstContainer>
        <Text h1 style={{ color: "#A9A0FD" }}>
          SeeData
        </Text>

        <KeyboardAvoidingView behavior="padding">
          <TextInput
            icon="user"
            placeholder="Nome"
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            icon="envelope-o"
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            icon="lock"
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

          <CountryBox>
            <FontAwesome
              name="map"
              size={18}
              color="#fff"
              style={{ marginRight: 8 }}
            />

            <Picker
              style={{ flex: 1 }}
              selectedValue={country}
              onValueChange={(value, _) => setCountry(value)}
            >
              <Picker.Item value={country} label="Selecione um pais" />
              {countryList.length > 0 &&
                countryList.map((currentCountry, index) => (
                  <Picker.Item
                    key={index}
                    value={currentCountry}
                    label={currentCountry}
                  />
                ))}
            </Picker>
          </CountryBox>
        </KeyboardAvoidingView>
      </FirstContainer>

      <SecondContainer>
        <Button
          text="Registrar"
          icon="sign-in"
          onPress={handleSignUp}
          enabled={!loading && !!email && !!name && !!password}
        />

        <Button
          text="Já tem conta? Acesse"
          variants="unfilled"
          onPress={() => navigate("Login")}
        />
      </SecondContainer>
    </MainContainer>
  );
};

export default SignUp;
