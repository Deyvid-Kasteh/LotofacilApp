import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PickerTeste = () => {
  
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  arrowButton: {
    backgroundColor: "#394A59",
    padding: 10,
    borderRadius: 5,
  },
  arrowText: {
    color: "#E9ECF2",
    fontSize: 20,
  },
  selectedNumberContainer: {
    backgroundColor: "#687B8C",
    padding: 20,
    borderRadius: 10,
  },
  selectedNumberText: {
    color: "#E9ECF2",
    fontSize: 24,
  },
});

export default PickerTeste;
