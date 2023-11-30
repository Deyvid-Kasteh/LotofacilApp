import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";
import Bolhas from "../Bolhas";

// Defina constantes para cores
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
        // Adicione a lógica para permitir no máximo 15 bolhas selecionadas
        if (chosenNumbers.length < 15) {
          setChosenNumbers([...chosenNumbers, numero]);
        }
      }
    };
    const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);
    if (viewHeight === 50) {
      return null; // Retorna null se a altura for 50
    } else {
      return (
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

        {alturaView1 === 200 && (
          <View style={bolhasContainerStyle}>
            {dezenas.map((numero, index) => (
              <Bubble key={index} numero={numero} />
            ))}
          </View>
        )}
      </View>

      <View
        style={[
          {
            width: 300,
            padding: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
            backgroundColor: "#687B8C",
          },
          viewHeight === 50
            ? { width: 250, backgroundColor: "#E9ECF2" }
            : { width: 300, backgroundColor: "#687B8C" },
        ]}
      >
        <TouchableOpacity
          style={[
            {
              width: 240,
              backgroundColor: "#394A59",
              backgroundColor: "#687B8C",
              backgroundColor: "#E9ECF2",
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
            },
            viewHeight === 50
              ? { width: 190, backgroundColor: "#BFCDD9" }
              : { width: 240, backgroundColor: "#E9ECF2" },
          ]}
          onPress={() => toggleHeight()}
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
        {renderFazerJogo()}
      </View>
    </View>
  );
};

export default ResultadoTexte;
