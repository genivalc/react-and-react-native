import "@/libs/unistyles";

import {
  Urbanist_400Regular,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/urbanist";
import { StatusBar } from "expo-status-bar";

import { Loading } from "@/components/loading";
import { Home } from "@/screens/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_400Regular,
    Urbanist_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}
