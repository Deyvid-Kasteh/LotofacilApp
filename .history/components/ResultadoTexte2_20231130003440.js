import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";
import Bolhas from "../Bolhas";

// Defina constantes para cores
const backgroundColor1 = "#687B8C";
const backgroundColor2 = "#394A59";
const backgroundColor3 = "#E9ECF2";

const ResultadoTexte = () => {
  const [viewHeight, setViewHeight] = useState(50);
  const toggleHeight = () => {
    const newHeight = viewHeight === 50 ? 200 : 50;
    setViewHeight(newHeight);
    console.log("mudou");
  };

  const [chosenNumbers, setChosenNumbers] = useState([]);

  const handleBolhaPress = (numero) => {
    if (chosenNumbers.includes(numero)) {
      setChosenNumbers(chosenNumbers.filter((num) => num !== numero));
    } else {
      if (chosenNumbers.length < 15) {
        setChosenNumbers([...chosenNumbers, numero]);
      }
    }
  };

  const bolhasContainerStyle = {
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    backgroundColor: viewHeight === 50 ? backgroundColor3 : backgroundColor1,
  };

  return (
    <View>
      <View
        style={{
          width: 300,
          height: 50,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          elevation: 2,
          backgroundColor: backgroundColor1,
          marginBottom: 10,
        }}
      >
        {/* ... */}
      </View>

      <View
        style={{
          width: 300,
          height: 230,
          padding: 10,
          borderRadius: 50,
          alignItems: "center",
          elevation: 2,
          backgroundColor: backgroundColor1,
          marginBottom: 10,
        }}
      >
        {/* ... */}
        <View style={bolhasContainerStyle}>
          {dezenasParaEscolher.map((numero, index) => (
            <Bolhas
              key={index}
              numero={numero}
              choose={chosenNumbers.includes(numero)}
              onPress={() => handleBolhaPress(numero)}
            />
          ))}
        </View>
      </View>

      <View
        style={{
          width: 300,
          padding: 10,
          borderRadius: 50,
          alignItems: "center",
          elevation: 2,
          backgroundColor: backgroundColor1,
        }}
      >
        {/* ... */}
        {viewHeight === 50 ? null : (
          <View style={bolhasContainerStyle}>
            {dezenasParaEscolher.map((numero, index) => (
              <Bolhas
                key={index}
                numero={numero}
                choose={chosenNumbers.includes(numero)}
                onPress={() => handleBolhaPress(numero)}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default ResultadoTexte;
