import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Teste2pagina = () => {
  return (
    <View style={styles.container}>
      {/* Exemplo com alignContent */}
      <View style={styles.multiLineContainer}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>

      {/* Exemplo com alignItems */}
      <View style={styles.singleLineContainer}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  multiLineContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    marginBottom: 20,
  },
  singleLineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "lightblue",
    margin: 5,
  },
});

const jfkgtg = 6655

export default Teste2pagina;
