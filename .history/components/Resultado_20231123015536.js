import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Bubble from "./Bubble";

const Resultado = () => {
  return (
    <View>
      <View
        style={{
          width: 300,
          height: 200,
          padding: 10,
          borderRadius: 10,
          flexWrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-evenly",
          elevation: 5,
          backgroundColor: "#95ACBF",

          // alignItems: "center",
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            margin: 8,
          }}
        >
          <Text>Resultado Último Jogo</Text>
        </TouchableOpacity>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
          <Bubble />
        </View>
      </View>
    </View>
  );
};

export default Resultado;
