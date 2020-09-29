import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "../services/firebaseService";
import AsyncStorage from "@react-native-community/async-storage";
import { MainContainer } from "../components";
import { ActivityIndicator } from "react-native";

type User = {
  name: string;
  email: string;
  country: string;
};

type AuthContextType = {
  user: User;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(true);

  async function signIn(email: string, password: string): Promise<void> {
    setLoading(true);
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    if (!user) return;

    const storagedUserObject = await firebase
      .database()
      .ref(`/users`)
      .child(user.uid)
      .once("value");

    const storagedUser = storagedUserObject.val();

    const { name, country } = storagedUser;

    setUser({
      name,
      email,
      country,
    });

    await AsyncStorage.setItem(
      "@SeeDataApp:user",
      JSON.stringify({ name, email, country })
    );
    setLoading(false);
  }

  async function signOut(): Promise<void> {
    await AsyncStorage.removeItem("@SeeDataApp:user");
    setUser({} as User);
  }

  useEffect(() => {
    async function loadUser() {
      setLoading(true);

      const userStoraged = await AsyncStorage.getItem("@SeeDataApp:user");

      if (userStoraged) {
        setUser(JSON.parse(userStoraged));
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  if (loading) {
    return (
      <MainContainer style={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#fff" size={48} />
      </MainContainer>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextType {
  const context = useContext<AuthContextType>(AuthContext);

  if (!context) throw new Error("Hook must be inside a Provider: Auth");

  return context;
}

export { AuthProvider, useAuth };
