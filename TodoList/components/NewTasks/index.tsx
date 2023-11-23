import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  newtTaskText: string;
  seNewtTaskText: React.Dispatch<React.SetStateAction<string>>;
  handleNewTaksAdd: () => void;
};

export function NewTasks({
  newtTaskText,
  seNewtTaskText,
  handleNewTaksAdd,
}: Props) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#F2F2F2"
        onChangeText={seNewtTaskText}
        value={newtTaskText}
      />
      <TouchableOpacity style={styles.button} onPress={handleNewTaksAdd}>
        <Image
          style={styles.buttonImagem}
          source={require("../../assets/icons/plus.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
