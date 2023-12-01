import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Bolhas = ({ numero, choose, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.bolha,
          { backgroundColor: choose ? "#394A59" : "#687B8C" },
        ]}
      >
        <Text style={styles.bolhaTexto}>{numero}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bolha: {
    (width: 35,
    height: 35,)
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    opacity: 1,
  },
  bolhaTexto: {
    color: "#E9ECF2",
    fontSize: 18,
  },
});

export default Bolhas;
