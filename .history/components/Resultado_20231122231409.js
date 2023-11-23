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
        }}
      >
        <Card.Content>
          <Title style={{ color: "#E9ECF2" }}>Resultado lotofacil</Title>

          <Paragraph
            style={{
              // backgroundColor: "#687B8C",
              // color: "#E9ECF2",
              justifyContent: "center",
              alignItems: "center",
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
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Resultado;
