import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";

const Resultado = () => {
  const dezenas = latestJson.Dezenas;

  const changeStyle = () => {
    console.log(latestJson.Dezenas);
  };

  return (
    <View>
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
          // flexWrap: "wrap",
          // flexDirection: "row",
          // alignContent: "center",
          // justifyContent: "flex-start",
          alignItems: "center",
          elevation: 2,
          // backgroundColor: "#95ACBF",
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      >
        <TouchableOpacity
          style={{
            width: 240,
            backgroundColor: "#394A59",
            backgroundColor: "#687B8C",
            backgroundColor: "#E9ECF2",

            elevation: 5,
            // alignContent: "center",
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
      <View
        style={{
          width: 300,
          height: 70,
          // padding: 10,
          borderRadius: 50,
          marginTop: 10,
          // flexWrap: "wrap",
          // flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          elevation: 2,
          // backgroundColor: "#95ACBF",
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
          // backgroundColor: "#687B8C",
        }}
      >
        <TouchableOpacity
          style={{
            width: 240,
            // backgroundColor: "#394A59",
            // backgroundColor: "#687B8C",
            // backgroundColor: "#E9ECF2",
            // backgroundColor: "#95ACBF",

            elevation: 5,
            alignContent: "center",
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
              // color: "#394A59",

              fontSize: 20,
            }}
          >
            Fazer um Jogo
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 300,
          height: 70,
          padding: 10,
          borderRadius: 50,
          elevation: 5,
          marginTop: 10,
          backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      ></View>
    </View>
  );
};

export default Resultado;
