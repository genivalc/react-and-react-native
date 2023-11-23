import { Text, TouchableOpacity, View, Image, Button } from "react-native";
import { styles } from "./styles";

type TypeTasks = {
  id: number;
  textTask: string;
  select: boolean;
};

type Props = {
  tasks: TypeTasks;
  onRemove: () => void;
  onSelection: () => void;
};

export function Tasks({ tasks, onRemove, onSelection }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.radioButton, tasks.select && styles.selected]}
        onPress={onSelection}
      >
        {tasks.select && (
          <Image source={require("../../assets/icons/Vector.png")}></Image>
        )}
      </TouchableOpacity>
      <Text style={[styles.name, tasks.select && styles.nameSelected]}>
        {tasks.textTask}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={require("../../assets/icons/Layer2.png")} />
      </TouchableOpacity>
    </View>
  );
}
