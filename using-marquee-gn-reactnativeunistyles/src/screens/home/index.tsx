import { Pressable, View } from "react-native";

import { ProfileCard } from "@/components/profile_card";
import { Sun } from "lucide-react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

export function Home() {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Pressable style={styles.toggleTheme}>
        <Sun size={24} color={"#369EFF"}></Sun>
      </Pressable>

      <ProfileCard />
    </View>
  );
}
