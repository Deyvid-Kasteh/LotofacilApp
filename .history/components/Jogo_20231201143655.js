import { View, Text } from "react-native";
import React from "react";
import latestJson from "../Latest.json";
import * as Cores from "../assets/Cores";

const dezenas = latestJson.Dezenas;

const Jogo = () => {
  return (
    <View
      style={{
        width: 320,
        height: 26,
        // borderWidth: 1,
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
      }}
    >
      <View></View>
      
    </View>
  );
};

export default Jogo;
