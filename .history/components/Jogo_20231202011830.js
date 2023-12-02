import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";

const Jogo = ({ numerosSelecionados, onDelete }) => {
  // Ordenar os números em ordem crescente
  const numerosOrdenados = [...numerosSelecionados].sort((a, b) => a - b);
  const handleDelete = async () => {
    try {
      // Adicione a lógica para deletar o jogo do AsyncStorage
      // ...

      // Chame a função onDelete para atualizar a lista
      onDelete();
      console.log("Chame a função onDelete");
    } catch (error) {
      console.error("Erro ao deletar jogo:", error);
    }
  };

  return (
    <View
      style={{
        width: 320,
        height: 26,
        backgroundColor: Cores.cor2,
        borderColor: "black",
        borderRadius: 20,
        flexWrap: "nowrap",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      {numerosOrdenados.map((numero, index) => (
        <View
          key={index}
          style={{
            width: 15,
            height: 15,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            margin: 1,
          }}
        >
          <Text
            style={{
              fontSize: 9,
              color: Cores.cor5,
            }}
          >
            {numero}
          </Text>
        </View>
      ))}
      <TouchableOpacity
        onPress={handleDelete}
        style={{
          width: 16,
          height: 16,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: Cores.cor1,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            fontSize: 9,
            // color: Cores.cor5,
            color: "red",
          }}
        >
          X
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleDelete}>
        <Text
          style={{
            fontSize: 9,
            color: "red",
          }}
        >
          X
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Jogo;
