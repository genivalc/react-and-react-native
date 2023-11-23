import React, { useState } from "react";
import { View, Image, Alert, FlatList, Text } from "react-native";

import { NewTasks } from "../../components/NewTasks";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { Info } from "../../components/Info";

type TypeTasks = {
  id: number;
  textTask: string;
  select: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<TypeTasks[]>([]);
  const [newtTaskText, seNewtTaskText] = useState("");

  const ALERT_MESSAGES = {
    invalidNameLength: {
      title: "Task não pode ser adicionado",
      message: `A tarefa deve ter pelo menos 1 caracteres para ser salvo`,
    },
  };

  const handleNewTaskAdd = () => {
    if (newtTaskText.length === 0) {
      return Alert.alert(
        ALERT_MESSAGES.invalidNameLength.title,
        ALERT_MESSAGES.invalidNameLength.message
      );
    }
    const task = {
      id: tasks.length + 1,
      textTask: newtTaskText,
      select: false,
    };
    setTasks((preTasks) => [...preTasks, task]);

    seNewtTaskText("");
  };

  const handleTaskRemove = (task: TypeTasks) => {
    Alert.alert("Remover", `Remover o participante ${task.textTask}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevsetTasks) =>
            prevsetTasks.filter((t) => t.id !== task.id)
          );
          Alert.alert("Deletado!");
        },
      },
    ]);
  };
  const handleOptionPress = (task: TypeTasks) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, select: !t.select } : t))
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/Logo.png")}
        />
      </View>

      <View style={styles.bottomHalf}>
        <NewTasks
          newtTaskText={newtTaskText}
          seNewtTaskText={seNewtTaskText}
          handleNewTaksAdd={handleNewTaskAdd}
        />
        <Info tasks={tasks}></Info>
        <FlatList
          style={styles.flastList}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Tasks
              tasks={item}
              onRemove={() => handleTaskRemove(item)}
              onSelection={() => handleOptionPress(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <Image
                style={styles.clipboard}
                source={require("../../assets/icons/Clipboard.png")}
              ></Image>
              <Text style={styles.listEmptyText}>
                Você ainda não tem tarefas cadastradas Crie tarefas e organize
                seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
