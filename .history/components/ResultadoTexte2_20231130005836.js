import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";
import Bolhas from "../Bolhas";

// Defina constantes para cores
const backgroundColor1 = "#687B8C";
const backgroundColor2 = "#394A59";
const backgroundColor3 = "#E9ECF2";

const ResultadoTexte2 = () => {
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
  };

  const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);

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
        <Text
          style={{
            color: backgroundColor3,
            fontSize: 27,
          }}
        >
          LOTOFÁCIL
        </Text>
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
        <TouchableOpacity
          style={{
            width: 240,
            backgroundColor: backgroundColor3,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
            marginBottom: 5,
          }}
          onPress={changeStyle()}
        >
          <Text
            style={{
              color: backgroundColor2,
              fontSize: 20,
            }}
          >
            Último Sorteio
          </Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          style={{
            width: 240,
            backgroundColor: backgroundColor2,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
          }}
          onPress={toggleHeight}
        >
          <Text
            style={{
              fontSize: 20,
              color: viewHeight === 50 ? backgroundColor1 : backgroundColor2,
            }}
          >
            Fazer um Jogo
          </Text>
        </TouchableOpacity>
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

export default ResultadoTexte2;
