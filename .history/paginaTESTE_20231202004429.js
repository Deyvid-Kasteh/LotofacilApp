import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Bubble from "./components/Bubble";
import Bolhas from "./Bolhas";
import MostrarJogosSalvos from "./components/MostrarJogosSalvos";

const backgroundColor1 = "#687B8C";
const backgroundColor2 = "#394A59";
const backgroundColor3 = "#E9ECF2";

const bolhasContainerStyle = {
  flexWrap: "wrap",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-evenly",
};
const ResultadoTexteParaFazerCorreções = () => {
  const [viewHeight, setViewHeight] = useState(50);
  const toggleHeight = () => {
    const newHeight = viewHeight === 50 ? 200 : 50;
    setViewHeight(newHeight);
    console.log("mudou");
  };

  const [alturaView1, setAlturaView1] = useState(200);
  const toggleAltura = () => {
    const novaAltura = alturaView1 === 200 ? 50 : 200;
    setAlturaView1(novaAltura);
  };

  const [alturaView3, setAlturaView3] = useState(200);
  const toggleAlturaView3 = () => {
    const novaAlturaView3 = alturaView3 === 200 ? 50 : 200;
    setAlturaView3(novaAlturaView3);
  };


  const renderConferirJogos = () => {
    const [chosenNumbers, setChosenNumbers] = useState([]);
    const handleBolhaPress = (numero) => {
      if (chosenNumbers.includes(numero)) {
        setChosenNumbers(chosenNumbers.filter((num) => num !== numero));
      } else {
        // Adicione a lógica para permitir no máximo 15 bolhas selecionadas
        if (chosenNumbers.length < 15) {
          setChosenNumbers([...chosenNumbers, numero]);
        }
      }
    };
    if (alturaView3 === 50) {
      return null; // Retorna null se a altura for 50
    } else {
      return (
        <View style={bolhasContainerStyle}>
          <MostrarJogosSalvos />
        </View>
      );
    }
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
        key="3"
        style={[
          {
            width: 300,
            padding: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
          },
          alturaView3 === 50
            ? { width: 250, backgroundColor: "#E9ECF2" }
            : { width: 370, backgroundColor: "#687B8C" },
        ]}
      >
        <TouchableOpacity
          style={[
            {
              width: 240,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
              marginBottom: 5,
            },
            alturaView3 === 50
              ? { width: 190, backgroundColor: "#BFCDD9" }
              : { width: 240, backgroundColor: "#E9ECF2" },
          ]}
          onPress={() => toggleAlturaView3()}
        >
          <Text
            style={{
              fontSize: 20,
              color: alturaView3 === 50 ? backgroundColor1 : backgroundColor2,
            }}
          >
            Conferir Jogos
          </Text>
        </TouchableOpacity>
        {renderConferirJogos()}
        {/* <MostrarJogosSalvos/> */}
      </View>
    </View>
  );
};

export default ResultadoTexteParaFazerCorreções;
