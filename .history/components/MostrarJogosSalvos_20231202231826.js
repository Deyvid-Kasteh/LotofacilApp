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
        margin: 10,
        backgroundColor: Cores.cor2,
      }}
    >
      <View
        style={{
          margin: 10,
        }}
      >
        <Text>Conferir jogos</Text>
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
