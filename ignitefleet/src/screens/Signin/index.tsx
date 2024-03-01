import { Container, Slogan, Title } from "./styles";
import backgroundImg from "../../../src/assets/background.png";
import { Button } from "../../components/Button";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { WEB_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import { Alert } from "react-native";
import { useState } from "react";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignI() {
  const [isAutenticating, setIsAuthenticanting] = useState(false);
  async function handleGoogleSignIn() {
    try {
      setIsAuthenticanting(true);

      const { idToken } = await GoogleSignin.signIn();

      if (idToken) {
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível conectar-se a sua conta google."
        );
        setIsAuthenticanting(false);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Entrar", "Não foi possível conectar-se a sua conta google.");
      setIsAuthenticanting(false);
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>
      <Button
        title="Entrar com Google"
        isLoading={isAutenticating}
        onPress={handleGoogleSignIn}
      />
    </Container>
  );
}
