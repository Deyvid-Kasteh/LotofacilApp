import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Jogo from "./Jogo";

const MostrarJogosSalvos = () => {
  const [jogosSalvos, setJogosSalvos] = useState([]);


  const handleDelete = async (index) => {
    try {
      // Remover o jogo do array
      const jogosAtualizados = [...jogosSalvos];
      jogosAtualizados.splice(index, 1);

      // Salvar a lista atualizada no AsyncStorage
      await saveJogos(jogosAtualizados);

      // Atualizar o estado para refletir a lista atualizada
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
    <View>
      <TouchableOpacity onPress={() => console.log("Mostrar jogos salvos")}>
        <Text>Mostrar Jogos Salvos</Text>
      </TouchableOpacity>

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

