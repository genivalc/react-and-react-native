import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/Logo.png")}
        />
      </View>

      <View style={styles.bottomHalf}></View>
    </View>
  );
}
