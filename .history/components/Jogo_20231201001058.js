import { View, Text } from "react-native";
import React from "react";
import latestJson from "../Latest.json";
import * as Cores from "../assets/Cores";

const dezenas = latestJson.Dezenas;

const Jogo = () => {
  return (
    <View
      style={{
        width: 200,
        height: 26,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        flexWrap: "nowrap",
        flexDirection: "row",
      }}
    >
      {dezenas.map((numero, index) => (
        <View
          key={index}
          style={{
            width: 16,
            height: 16,
            backgroundColor: Cores.cor1,
            margin: 1,
          }}
        >
              <Text style={{
              fontSize: 8
          }}>{numero}</Text>
        </View>
      ))}
    </View>
  );
};

export default Jogo;
