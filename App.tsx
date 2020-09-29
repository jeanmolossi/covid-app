import "react-native-gesture-handler";
import React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Routes from "./src/routes";
import AppProvider from "./src/hooks";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400: Montserrat_400Regular,
    Montserrat_500: Montserrat_500Medium,
    Montserrat_700: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size={48} color="#FFF" />
      </SafeAreaView>
    );
  }

  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <View style={{ flex: 1, width: "100%" }}>
          <Routes />
        </View>
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#473f97",
    alignItems: "center",
    justifyContent: "center",
  },
});
