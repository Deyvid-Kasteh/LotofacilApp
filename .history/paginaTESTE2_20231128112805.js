import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Teste2pagina = () => {
  return (
    <View style={styles.multiLineContainer}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  multiLineContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "lightblue",
    margin: 5,
  },
});


export default Teste2pagina;
