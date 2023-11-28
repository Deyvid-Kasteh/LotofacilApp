import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Teste2pagina = () => {
  return (
    <View style={styles.singleLineContainer}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  singleLineContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "lightgreen",
    margin: 5,
  },
});


export default Teste2pagina;
