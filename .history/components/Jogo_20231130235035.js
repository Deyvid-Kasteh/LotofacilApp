import { View, Text } from "react-native";
import React from "react";
import latestJson from "../Latest.json";

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
          <View key={index}
          style={{}}>
          <Text>{numero}</Text>
        </View>
      ))}
    </View>
  );
};

export default Jogo;
