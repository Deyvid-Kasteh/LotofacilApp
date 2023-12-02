import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Bubble from "./components/Bubble";
import Bolhas from "./Bolhas";
import Jogo from "./Jogo";
import MostrarJogosSalvos from "./MostrarJogosSalvos";

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

  const dezenas = latestJson.Dezenas;

  const renderFazerJogo = () => {
    const [chosenNumbers, setChosenNumbers] = useState([]);
    const bolhasSelecionadas = chosenNumbers.length;
    const onSaveJogoPress = async () => {
      if (bolhasSelecionadas === 15) {
        try {
          // Recupera os jogos já salvos (se existirem)
          const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
          const jogosSalvos = jogosSalvosJSON
            ? JSON.parse(jogosSalvosJSON)
            : [];

          // Cria um objeto representando o jogo atual
          const jogoAtual = {
            numerosSelecionados: chosenNumbers,
            data: new Date().toLocaleString(),
          };

          // Adiciona o jogo atual à lista de jogos
          jogosSalvos.push(jogoAtual);

          // Salva a lista atualizada de jogos no AsyncStorage
          await AsyncStorage.setItem("meusJogos", JSON.stringify(jogosSalvos));

          console.log("Jogo salvo!");
          // Limpa os números escolhidos após salvar o jogo
          setChosenNumbers([]);
        } catch (error) {
          console.error("Erro ao salvar o jogo:", error);
        }
      } else {
        console.log("Selecione exatamente 15 números para salvar o jogo.");
      }
    };
    const handleBolhaPress = (numero) => {
      if (chosenNumbers.includes(numero)) {
        setChosenNumbers(chosenNumbers.filter((num) => num !== numero));
      } else {
        if (bolhasSelecionadas < 15) {
          setChosenNumbers([...chosenNumbers, numero]);
        }
      }
    };
    const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);

    if (viewHeight === 50) {
      return null;
    } else {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{}}>
            <Text
              style={{
                color: backgroundColor3,
                fontSize: 16,
              }}
            >
              Escolha 15 números
            </Text>
          </View>
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
          <View key="números" style={{}}>
            <Text
              style={{
                color: backgroundColor3,
                fontSize: 16,
              }}
            >
              {bolhasSelecionadas} números selecionados
            </Text>
            <TouchableOpacity onPress={onSaveJogoPress}>
              <Text
                style={{
                  color: bolhasSelecionadas === 15 ? "green" : backgroundColor3,
                }}
              >
                SALVAR JOGO
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={onDeleteJogosPress}>
              <Text style={{ color: "red" }}>DELETAR JOGOS</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      );
    }
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
    const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);
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
        key="1"
        style={[
          {
            width: 300,
            padding: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
            backgroundColor: backgroundColor1,
            marginBottom: 10,
          },
          alturaView1 === 50
            ? { width: 250, backgroundColor: "#E9ECF2" }
            : { width: 300, backgroundColor: "#687B8C" },
        ]}
      >
        <TouchableOpacity
          style={[
            {
              width: 240,
              backgroundColor: backgroundColor3,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
              marginBottom: 5,
            },
            alturaView1 === 50
              ? { width: 190, backgroundColor: "#BFCDD9" }
              : { width: 240, backgroundColor: "#E9ECF2" },
          ]}
          onPress={() => toggleAltura()}
        >
          <Text
            style={{
              fontSize: 20,
              color: alturaView1 === 50 ? backgroundColor1 : backgroundColor2,
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
        key="2"
        style={[
          {
            width: 300,
            padding: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
            marginBottom: 10,
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
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
              marginBottom: 5,
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
