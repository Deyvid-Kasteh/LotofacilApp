import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaginaTesteee = () => {
  // Estado para controlar a altura da View
  const [viewHeight, setViewHeight] = useState(50);

  // Função para alternar a altura da View
  const toggleHeight = () => {
    // Verifica o valor atual da altura
    const newHeight = viewHeight === 50 ? 200 : 50;

    // Atualiza o estado para a nova altura
    setViewHeight(newHeight);
  };

  return (
    <View style={styles.container}>
      {/* A View cuja altura queremos modificar */}
      <View style={[styles.box, { height: viewHeight }]} />

      {/* TouchableOpacity para alternar a altura ao ser pressionado */}
      <TouchableOpacity onPress={toggleHeight}>
        <View style={styles.button}>
          <Text>Toggle Altura</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    backgroundColor: "blue",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "green",
  },
});

export default PaginaTesteee;
