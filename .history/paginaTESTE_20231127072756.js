import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaginaTesteee = () => {
  const [viewHeight, setViewHeight] = useState(50);

  const toggleHeight = () => {
    const newHeight = viewHeight === 50 ? 200 : 50;
    setViewHeight(newHeight);
  };

  const renderText = () => {
    if (viewHeight === 50) {
      return <Text>Texto de 1 linha</Text>;
    } else {
      return (
        <Text>
          Texto de 6 linhas
          {"\n"}Linha 2{"\n"}Linha 3{"\n"}Linha 4{"\n"}Linha 5{"\n"}Linha 6
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* A View cuja altura queremos modificar */}
      <View style={[styles.box, { height: viewHeight }]}>{renderText()}</View>

      {/* Botão fixo na parte inferior da tela */}
      <TouchableOpacity style={styles.button} onPress={toggleHeight}>
        <Text>Toggle Altura</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Alinha a View na parte inferior da tela
    alignItems: "center",
  },
  box: {
    width: 300,
    backgroundColor: "blue",
    padding: 10, // Adiciona algum espaço interno para o texto
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "green",
  },
});
export default PaginaTesteee;




