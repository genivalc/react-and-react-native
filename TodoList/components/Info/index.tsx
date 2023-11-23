import { Text, View } from "react-native";
import { styles } from "./styles";

type TypeTasks = {
  id: number;
  textTask: string;
  select: boolean;
};

type Props = {
  tasks: TypeTasks[];
};

export function Info({ tasks }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.created}>
        <Text style={styles.createdText}>Criadas </Text>
        <View style={styles.circle}>
          <Text style={styles.number}>{tasks.length}</Text>
        </View>
      </View>

      <View style={styles.created}>
        <Text style={styles.completed}>Concluídas </Text>
        <View style={styles.circle}>
          <Text style={styles.number}>
            {tasks.filter((tasks) => tasks.select === true).length}
          </Text>
        </View>
      </View>
    </View>
  );
}
