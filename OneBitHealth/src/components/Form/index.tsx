import React, { useState } from "react";
import {
  Vibration,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";

import { styles } from "./styles";
import { ResultImc,  } from "./ResultImc";

type ResultsImc  = {
  id: number,
  imc: number
}

export function Form() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [messageImc, setMessageImc] = useState<string>(
    "Preencha o peso e a altura"
  );
  const [imc, setImc] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>("Calcular");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [imcList, setImcList] = useState<ResultsImc[]>([])

  function calculateImc(): void {
    const numericHeight = parseFloat(height.replace(",", "."));
    const numericWeight = parseFloat(weight.replace(",", "."));

    if (!isNaN(numericHeight) && !isNaN(numericWeight) && numericHeight !== 0) {
      const calculatedImc = numericWeight / (numericHeight * numericHeight);
      setImcList([...imcList, {id: new Date().getTime(),imc: calculatedImc}] )
      setImc(calculatedImc);
      setMessageImc("Seu IMC é:");
      setButtonText("Calcular Novamente");
      setErrorMessage("");
      setHeight("");
      setWeight("");
    } else {
      verificationImc();
      setImc(0);
      setMessageImc("Preencha o peso e a altura corretamente");
      setButtonText("Calcular");
    }
  }

  function verificationImc() {
    if (imc === 0) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatorio");
    }
  }

  return (
    <View style={styles.container}>
      {imc === 0 ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}> Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.76"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.366"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => calculateImc()}
          >
            <Text style={styles.textButtonCalculator}>{buttonText}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => calculateImc()}
          >
            <Text style={styles.textButtonCalculator}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.listImcs}
      data={imcList.reverse()}
      renderItem={({item}) => {
        return (
          <Text style={styles.resultImcItem}>
         Resultado IMC =
            {item.imc.toFixed(2)}
          </Text>
        )
      }}
      keyExtractor={(item) => {item.id}}
      >

      </FlatList>
    </View>
  );
}
