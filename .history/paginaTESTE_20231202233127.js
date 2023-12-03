import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

const PickerTeste = () => {
  const [selectedValue, setSelectedValue] = useState("Selecione um estado");
  const estados = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Bahia",
    "Outro",
  ];

  return (
    <View>
      <Text>Escolha um estado:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecione um estado" value="Selecione um estado" />
        {estados.map((estado, index) => (
          <Picker.Item key={index} label={estado} value={estado} />
        ))}
      </Picker>
      <Text>Estado selecionado: {selectedValue}</Text>
    </View>
  );
};





export default PickerTeste;
