import { Share, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  messageResultImc: string;
  resultImc: number;
};

export function ResultImc({ messageResultImc, resultImc }: Props) {
  const onshare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje e" + resultImc,
    });
  };

  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.numberImc}>
        {resultImc ? resultImc.toFixed(2) : ""}
      </Text>
      <View style={styles.boxSharebutton}>
        <TouchableOpacity style={styles.shared} onPress={onshare}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
