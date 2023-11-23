import { View, Text } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import Bubble from "./Bubble";

const Resultado = () => {
  return (
    <View>
      <Card
        style={{
          width: 300,
          height: 200,
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          backgroundColor: "#95ACBF",
          // backgroundColor: "#BFCDD9",
          flexWrap: "wrap",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
      </Card>

      <View
        style={{
          width: 300,
          height: 200,
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          backgroundColor: "#95ACBF",
          // backgroundColor: "#BFCDD9",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
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
