import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import * as tensorFlow from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as FileSystem from "expo-file-system";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import {
  Classification,
  ClassificationProps,
} from "./components/Classification";

export default function App() {
  const [selectedImageUri, setSelectImageUri] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<ClassificationProps[]>([]);

  async function handleSelectImage() {
    setLoading(true);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];
        setSelectImageUri(uri);
        await imageClassification(uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function imageClassification(imageUri: string) {
    setResults([]);
    await tensorFlow.ready();
    const model = await mobilenet.load();

    const imageBase64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const imgBuffer = tensorFlow.util.encodeString(
      imageBase64,
      "base64"
    ).buffer;
    const raw = new Uint8Array(imgBuffer);
    const iamgeTensor = decodeJpeg(raw);

    const classificationResult = await model.classify(iamgeTensor);
    setResults(classificationResult);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Image
        source={{
          uri: selectedImageUri
            ? selectedImageUri
            : "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
        }}
        style={styles.image}
      ></Image>

      <View style={styles.results}>
        {results.map((result) => (
          <Classification key={result.className} data={result} />
        ))}
      </View>
      {isLoading ? (
        <ActivityIndicator color="#5F1BBF" />
      ) : (
        <Button title="Selecionar Imagem" onPress={handleSelectImage} />
      )}
    </View>
  );
}
