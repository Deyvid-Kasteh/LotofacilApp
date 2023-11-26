import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { Easing, Value, timing } from "react-native-reanimated";

const  = () => {
  const heightValue = useRef(new Value(50)).current;

  const handlePress = () => {
    // Inicia a animação
    timing(heightValue, {
      toValue: 200,
      duration: 500, // Tempo da animação em milissegundos
      easing: Easing.ease, // Tipo de easing (pode ser ajustado)
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* A View cuja altura queremos alterar */}
      <Animated.View style={[styles.box, { height: heightValue }]} />

      {/* TouchableOpacity para iniciar a animação */}
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          {/* Conteúdo do botão (pode ser um texto, ícone, etc.) */}
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





export default ;
