import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Teste2pagina = () => {
  const [alignProperty, setAlignProperty] = useState("alignContent");

  const toggleAlignProperty = () => {
    setAlignProperty((prevAlignProperty) =>
      prevAlignProperty === "alignContent" ? "alignItems" : "alignContent"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={toggleAlignProperty}
          style={styles.toggleButton}
        >
          <Text style={styles.buttonText}>Toggle {alignProperty}</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.flexContainer, styles[alignProperty]]}>
        <View style={styles.box} />
        <View style={styles.box} />
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
  toggleContainer: {
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  flexContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  alignItems: {
    alignItems: "center",
  },
  alignContent: {
    alignContent: "space-between",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "lightgreen",
    margin: 5,
  },
});


export default Teste2pagina;
