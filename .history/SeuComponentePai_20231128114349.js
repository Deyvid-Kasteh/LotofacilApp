import React, { useState } from "react";
import { View } from "react-native";
import Bolhas from "./Bolhas";

const SeuComponentePai = () => {
  const [chosenNumbers, setChosenNumbers] = useState([]);

  const handleBolhaPress = (numero) => {
    if (chosenNumbers.includes(numero)) {
      setChosenNumbers(chosenNumbers.filter((num) => num !== numero));
    } else {
      setChosenNumbers([...chosenNumbers, numero]);
    }
  };

  const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <View>
      {dezenasParaEscolher.map((numero, index) => (
        <Bolhas
          key={index}
          numero={numero}
          choose={chosenNumbers.includes(numero)}
          onPress={() => handleBolhaPress(numero)}
        />
      ))}
    </View>
  );
};

export default SeuComponentePai;
