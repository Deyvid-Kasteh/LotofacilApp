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






  // return (
  //   <View style={styles.container}>
  //     {/* A View cuja altura queremos modificar */}
  //     <View style={[styles.box, { height: viewHeight }]}>{renderText()}</View>

  //     {/* Botão fixo na parte inferior da tela */}
  //     <TouchableOpacity style={styles.button} onPress={toggleHeight}>
  //       <Text>Toggle Altura</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end", // Alinha a View na parte inferior da tela
//     alignItems: "center",
//   },
//   box: {
//     width: 300,
//     backgroundColor: "blue",
//     padding: 10, // Adiciona algum espaço interno para o texto
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: "green",
//   },
// });






export default PaginaTesteee;



