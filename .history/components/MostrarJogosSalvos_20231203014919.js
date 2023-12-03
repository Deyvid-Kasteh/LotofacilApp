import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Jogo from "./Jogo";
import * as Cores from "../assets/Cores";


const MostrarJogosSalvos = () => {
  const [jogosSalvos, setJogosSalvos] = useState([]);

  // Adicione a função saveJogos
  const saveJogos = async (jogos) => {
    try {
      await AsyncStorage.setItem("meusJogos", JSON.stringify(jogos));
    } catch (error) {
      console.error("Erro ao salvar jogos:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const jogosAtualizados = [...jogosSalvos];
      jogosAtualizados.splice(index, 1);

      await saveJogos(jogosAtualizados);

      setJogosSalvos(jogosAtualizados);
    } catch (error) {
      console.error("Erro ao deletar jogo:", error);
    }
  };

  useEffect(() => {
    const carregarJogosSalvos = async () => {
      try {
        const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
        const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];
        setJogosSalvos(jogosSalvos);
      } catch (error) {
        console.error("Erro ao carregar jogos salvos:", error);
      }
    };

    carregarJogosSalvos();
  }, []);

  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: Cores.cor1,
        marginTop: 10,
        marginBottom: 80,
      }}
    >
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: Cores.cor3,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 13,
              color: Cores.cor5,
            }}
          >
            Comparar jogos com sortei:
          </Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 60,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              color: Cores.cor5,
            }}
          >
            Último
          </Text>
        </View>
        <View
          style={{
            width: 24,
            // height: 16,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            backgroundColor: Cores.cor1,
            marginLeft: 20,
          }}
        >
          <Text>></Text>
        </View>
      </View>
      {jogosSalvos.length === 0 ? (
        <Text>Nenhum jogo salvo ainda</Text>
      ) : (
        jogosSalvos.map((jogo, index) => (
          <Jogo
            key={index}
            numerosSelecionados={jogo.numerosSelecionados}
            onDelete={() => handleDelete(index)}
          />
        ))
      )}
    </View>
  );
};

export default MostrarJogosSalvos;
