import { View, Text } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const Resultado = () => {
  return (
    <View>
          <Card style={{
              width: 300,
              height: 200, backgroundColor: "#E9ECF2"
          }}>
        <Card.Content>
          <Title style={{ color: "white" }}>Resultado lotofacil</Title>
          <Paragraph>Conteúdo do card.</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Resultado;
