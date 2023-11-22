import React, { useState } from "react";
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

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const MIN_NAME_LENGTH = 3;

  const ALERT_MESSAGES = {
    participantExists: {
      title: "Participante Existe",
      message: "Já existe um participante na lista com esse nome",
    },
    invalidNameLength: {
      title: "Participante não pode ser adicionado",
      message: `O nome deve ter pelo menos ${MIN_NAME_LENGTH} caracteres para ser salvo`,
    },
  };

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        ALERT_MESSAGES.participantExists.title,
        ALERT_MESSAGES.participantExists.message
      );
    }

    if (participantName.length < MIN_NAME_LENGTH) {
      return Alert.alert(
        ALERT_MESSAGES.invalidNameLength.title,
        ALERT_MESSAGES.invalidNameLength.message
      );
    }

    setParticipants((prevParticipants) => [
      ...prevParticipants,
      participantName,
    ]);
    setParticipantName("");
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevParticipants) =>
            prevParticipants.filter((participant) => participant !== name)
          );
          Alert.alert("Deletado!");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento neto</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
