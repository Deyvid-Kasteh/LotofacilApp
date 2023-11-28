import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaginaTesteee = () => {
  const [data, setData] = useState([
    { id: 1, value: "Item 1", color: "lightblue" },
    { id: 2, value: "Item 2", color: "lightgreen" },
    { id: 3, value: "Item 3", color: "lightblue" },
    // ... mais objetos de dados
  ]);

  const handlePress = (itemId) => {
    // Atualizando a cor da View quando TouchableOpacity é pressionado
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              color: item.color === "lightblue" ? "lightcoral" : "lightblue",
            }
          : item
      )
    );
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
          <View style={[styles.item, { backgroundColor: item.color }]}>
            <Text>{item.value}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );






};









const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 10,
    margin: 5,
  },
});





export default PaginaTesteee;



