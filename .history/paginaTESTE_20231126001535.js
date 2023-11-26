import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaginaTesteee = () => {
  const [viewHeight, setViewHeight] = useState(50); // Inicializa com a altura desejada

  const increaseHeight = () => {
    setViewHeight(200); // Atualiza o estado para a nova altura desejada
  };

  return (
    <View style={styles.container}>
      {/* A View cuja altura queremos modificar */}
      <View style={[styles.box, { height: viewHeight }]} />

      {/* TouchableOpacity para aumentar a altura ao ser pressionado */}
      <TouchableOpacity onPress={increaseHeight}>
        <View style={styles.button}>
          <Text>Aumentar Altura</Text>
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
