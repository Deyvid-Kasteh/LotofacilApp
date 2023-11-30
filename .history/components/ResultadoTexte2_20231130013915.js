import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";
import Bolhas from "../Bolhas";

const backgroundColor1 = "#687B8C";
const backgroundColor2 = "#394A59";
const backgroundColor3 = "#E9ECF2";

const bolhasContainerStyle = {
  flexWrap: "wrap",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-evenly",
};

const ResultadoTexte = () => {
  const [alturaView, setAlturaView] = useState(200);

  const toggleAltura = () => {
    const novaAltura = alturaView === 200 ? 50 : 200;
    setAlturaView(novaAltura);
  };

  const dezenas = latestJson.Dezenas;

  const changeStyle = () => {
    console.log(latestJson.Dezenas);
  };

  const renderFazerJogo = () => {
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
    const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);

    return alturaView === 200 ? (
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
    ) : null;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        key="1"
        style={{
          width: 300,
          height: alturaView,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
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
          onPress={() => toggleAltura()}
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
        {renderFazerJogo()}
      </View>

      <View
        key="2"
        style={{
          width: 300,
          height: 50,
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
            backgroundColor: backgroundColor3,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
            marginBottom: 5,
          }}
          onPress={() => toggleAltura()}
        >
          <Text
            style={{
              color: backgroundColor2,
              fontSize: 20,
            }}
          >
            Fazer um Jogo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultadoTexte;
