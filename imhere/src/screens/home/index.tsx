import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [getParticipants, setParticipants] = useState<string[]>([
    "Genival",
    "Thaisa",
    "Neto",
  ]);
  const [getParticipantsName, setParticipantsName] = useState("");

  function handleParticipantAdd() {
    if (getParticipants.includes(getParticipantsName)) {
      return Alert.alert(
        "Participante Existe",
        "Ja existe um participante na lista com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, getParticipantsName]);
    setParticipantsName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          );
          Alert.alert("Deletado!");
        },
      },
      {
        text: "Nao",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento neto</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(text) => setParticipantsName(text)}
          value={getParticipantsName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={getParticipants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista
            de presenca. de presenca.
          </Text>
        )}
      />
    </View>
  );
}
