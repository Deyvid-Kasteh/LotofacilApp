import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import latestJson from "../Latest.json";
import * as Cores from "../assets/Cores";

const ultimoSorteio = latestJson.Dezenas;
console.log(ultimoSorteio);

function contarNumerosIguais(arrayA, arrayB) {
  const numerosComuns = arrayA.filter((numero) => arrayB.includes(numero));
  const quantidadeNumerosIguais = numerosComuns.length;
  return quantidadeNumerosIguais;
}

const Jogo = ({ numerosSelecionados, onDelete }) => {
  // Ordenar os números em ordem crescente
  const numerosOrdenados = [...numerosSelecionados].sort((a, b) => a - b);

  const quantidadeNumerosIguais = contarNumerosIguais(
    numerosSelecionados,
    ultimoSorteio
  );

  console.log(quantidadeNumerosIguais); // Isso imprimirá a quantidade de números iguais

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
        marginBottom: 8,
        // marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: Cores.cor1,
          // marginLeft: 30,
          marginRight
        }}
      >
        <Text
          style={{
            fontSize: 9,
            color: Cores.cor5,
          }}
        >
          {quantidadeNumerosIguais}
        </Text>
      </View>
      {numerosOrdenados.map((numero, index) => {
        const estaNoUltimoSorteio = ultimoSorteio.includes(numero);
        return (
          <>
            {estaNoUltimoSorteio ? (
              <View
                key={index}
                style={{
                  width: 14,
                  height: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  // backgroundColor: Cores.cor5,
                  backgroundColor: "#79A637",

                  margin: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    color: Cores.cor1,
                  }}
                >
                  {numero}
                </Text>
              </View>
            ) : (
              <View
                key={index}
                style={{
                  width: 14,
                  height: 14,
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
            )}
          </>
        );
      })}

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
      </TouchableOpacity>
    </View>
  );
};

export default Jogo;
