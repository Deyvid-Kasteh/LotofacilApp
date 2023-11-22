import { View, Text } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const Resultado = () => {
  return (
    <View>
      <Card style={{ width: 300, height: 200, backgroundColor: "#687B8C
" }}>
        <Card.Content>
          <Title>Resultado lotofacil</Title>
          <Paragraph>Conteúdo do card.</Paragraph>
        </Card.Content>
      </Card>
      <Card style={{ width: 300, height: 200, backgroundColor: "#3498db" }}>
        <Card.Content>
          <Title style={{ color: "white" }}>Meu Card</Title>
          <Paragraph style={{ color: "white" }}>Conteúdo do card.</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Resultado;
