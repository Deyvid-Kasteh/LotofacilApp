import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import latestJson from "../Latest.json";
import * as Cores from "../assets/Cores";


const ultimoSorteio = latestJson.Dezenas;
console.log(ultimoSorteio);

const Jogo = ({ numerosSelecionados, onDelete }) => {
  // Ordenar os números em ordem crescente
  const numerosOrdenados = [...numerosSelecionados].sort((a, b) => a - b);

  const handleDelete = async () => {
    try {
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
        // marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      {numerosOrdenados.map((numero, index) => (

        if 
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
          width: 20,
          height: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: Cores.cor1,
          marginLeft: 30,
        }}
      >
        <MaterialCommunityIcons
          name="delete-forever"
          size={14}
          // color="#F26430"
          color="#D96248"
        />
        {/* <Text
          style={{
            fontSize: 9,
            color: "red",
          }}
        >
          X
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Jogo;
