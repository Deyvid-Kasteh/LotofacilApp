import { View, Text } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import Bubble from "./Bubble";

const Resultado = () => {
  return (
    <View>
      <View>
        <Text>tghtrghjtreyj</Text>
      </View>
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
          // alignItems: "center",

          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          backgroundColor: "#95ACBF",
          // backgroundColor: "#BFCDD9",
        }}
      >
        <View >


        </View>
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
  );
};

export default Resultado;
