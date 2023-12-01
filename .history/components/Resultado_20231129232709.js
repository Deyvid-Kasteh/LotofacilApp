import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";
import Bolhas from "../Bolhas";

const Resultado = () => {
  const [viewHeight, setViewHeight] = useState(50);
  const toggleHeight = () => {
    const newHeight = viewHeight === 50 ? 200 : 50;
    setViewHeight(newHeight);
    console.log("mudou");
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
  } else {
    return (
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
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
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
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
          backgroundColor: "#687B8C",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "#E9ECF2",
            // color: "#394A59",
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

          backgroundColor: "#687B8C",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: 240,
            backgroundColor: "#394A59",
            backgroundColor: "#687B8C",
            backgroundColor: "#E9ECF2",

            elevation: 5,
            justifyContent: "center",
            alignItems: "center",

            padding: 10,
            borderRadius: 20,
            marginBottom: 5,
          }}
          onPress={() => changeStyle()}
        >
          <Text
            style={{
              color: "#E9ECF2",
              color: "#394A59",

              fontSize: 20,
            }}
          >
            Último Sorteio
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          {dezenas.map((numero, index) => (
            <Bubble key={index} numero={numero} />
          ))}
        </View>
      </View>

      {/* SEPARAÇÃO */}
      {/* SEPARAÇÃO */}
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
            style={[
              {
                fontSize: 20,
              },
              viewHeight === 50 ? { color: "#687B8C" } : { color: "#394A59" },
            ]}
          >
            Fazer um Jogo
          </Text>
        </TouchableOpacity>
        {renderFazerJogo()}

        {/* {SeuComponentePai()} */}
      </View>
    </View>
  );
};

export default Resultado;