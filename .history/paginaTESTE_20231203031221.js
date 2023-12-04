import React, { useState } from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";

const PickerTeste = () => {
  //   const [arrayC, setArrayC] = useState([]);
  //   const [arraysFilhos, setArraysFilhos] = useState([]);
  //   const [arraysOrdenados, setArraysOrdenados] = useState([]);
  //   const [showArraysOrdenados, setShowArraysOrdenados] = useState(false);

  //   const generateRandomArray = (length) => {
  //     return Array.from({ length }, () => Math.floor(Math.random() * 25) + 1);
  //   };

  //   const organizeArrays = () => {
  //     const newArrayC = Array.from({ length: 15 }, (_, index) => index + 1);
  //     const newArrayFilhos = Array.from({ length: 20 }, () =>
  //       generateRandomArray(15)
  //     );

  //     const organizedObject = {};
  //     newArrayFilhos.forEach((arrayFilho) => {
  //       const quantidadeNumerosIguais = arrayFilho.filter((numero) =>
  //         newArrayC.includes(numero)
  //       ).length;
  //       if (!organizedObject[quantidadeNumerosIguais]) {
  //         organizedObject[quantidadeNumerosIguais] = [];
  //       }
  //       organizedObject[quantidadeNumerosIguais].push(arrayFilho);
  //     });

  //     const keys = Object.keys(organizedObject);
  //     keys.sort((a, b) => b - a);

  //     const organizedObjectSorted = {};
  //     keys.forEach((key) => {
  //       organizedObjectSorted[key] = organizedObject[key];
  //     });

  //     const organizedJsonSorted = JSON.stringify(organizedObjectSorted);

  //     setArrayC(newArrayC);
  //     setArraysFilhos(newArrayFilhos);
  //     setArraysOrdenados(organizedJsonSorted);
  //     setShowArraysOrdenados(true);
  //   };

  //   return (
  //     <ScrollView contentContainerStyle={styles.container}>
  //       <View style={styles.view}>
  //         <Text style={styles.text}>Array C:</Text>
  //         <Text style={styles.jsonText}>{JSON.stringify(arrayC)}</Text>
  //       </View>

  //       <View style={styles.view}>
  //         <Text style={styles.text}>Arrays Filhos:</Text>
  //         <ScrollView horizontal style={styles.quarterScreen}>
  //           <Text style={styles.jsonText}>{JSON.stringify(arraysFilhos)}</Text>
  //         </ScrollView>
  //       </View>

  //       {showArraysOrdenados && (
  //         <View style={styles.view}>
  //           <Text style={styles.text}>Arrays Ordenados:</Text>
  //           <ScrollView style={styles.quarterScreen}>
  //             <Text style={styles.jsonText}>{arraysOrdenados}</Text>
  //           </ScrollView>
  //         </View>
  //       )}

  //       <Button title="Organizar Arrays" onPress={organizeArrays} />
  //     </ScrollView>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flexGrow: 1,
  //     backgroundColor: "#F0F0F0",
  //   },
  //   view: {
  //     marginVertical: 10,
  //   },
  //   text: {
  //     fontSize: 10,
  //     marginBottom: 10,
  //   },
  //   jsonText: {
  //     fontSize: 14,
  //     color: "#333333",
  //   },
  //   quarterScreen: {
  //     height: "25%",
  //   },
  // });

  const [arrayC, setArrayC] = useState([]);
  const [arraysFilhos, setArraysFilhos] = useState([]);
  const [arraysOrdenados, setArraysOrdenados] = useState([]);
  const [showArraysOrdenados, setShowArraysOrdenados] = useState(false);

  const generateRandomArray = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 25) + 1);
  };

  const organizeArrays = () => {
    const newArrayC = Array.from({ length: 15 }, (_, index) => index + 1);
    const newArrayFilhos = Array.from({ length: 20 }, () =>
      generateRandomArray(15)
    );

    const organizedObject = {};
    newArrayFilhos.forEach((arrayFilho, index) => {
      const quantidadeNumerosIguais = arrayFilho.filter((numero) =>
        newArrayC.includes(numero)
      ).length;
      if (!organizedObject[quantidadeNumerosIguais]) {
        organizedObject[quantidadeNumerosIguais] = [];
      }
      organizedObject[quantidadeNumerosIguais].push({ arrayFilho, index });
    });

    const keys = Object.keys(organizedObject);
    keys.sort((a, b) => b - a);

    const organizedObjectSorted = {};
    keys.forEach((key) => {
      organizedObjectSorted[key] = organizedObject[key];
    });

    const organizedJsonSorted = JSON.stringify(organizedObjectSorted);

    setArrayC(newArrayC);
    setArraysFilhos(newArrayFilhos);
    setArraysOrdenados(organizedJsonSorted);
    setShowArraysOrdenados(true);
  };

  const renderColoredNumber = (numero) => {
    const numeroC = arrayC.includes(numero);
    return (
      <Text key={numero} style={{ color: numeroC ? "red" : "black" }}>
        {numero}
      </Text>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Array C:</Text>
        <View style={styles.numberContainer}>
          {arrayC.map((numero) => (
            <View key={numero}>{renderColoredNumber(numero)}</View>
          ))}
        </View>
      </View>

      <View style={styles.view}>
        <Text style={styles.text}>Arrays Filhos:</Text>
        <ScrollView horizontal style={styles.quarterScreen}>
          <View style={styles.numberContainer}>
            {arraysFilhos.map((arrayFilho, index) => (
              <View key={index}>
                {arrayFilho.map((numero) => (
                  <View key={numero}>{renderColoredNumber(numero)}</View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {showArraysOrdenados && (
        <View style={styles.view}>
          <Text style={styles.text}>Arrays Ordenados:</Text>
          <ScrollView style={styles.quarterScreen}>
            {Object.entries(JSON.parse(arraysOrdenados)).map(
              ([key, arrays]) => (
                <View key={key}>
                  <Text>{`Quantidade de Números Iguais: ${key}`}</Text>
                  <Text>{`Índices dos Arrays Filhos: ${arrays.map(
                    (arr) => arr.index
                  )}`}</Text>
                </View>
              )
            )}
          </ScrollView>
        </View>
      )}

      <Button title="Organizar Arrays" onPress={organizeArrays} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F0F0F0",
  },
  view: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  numberContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  quarterScreen: {
    height: "25%",
  },
});

export default PickerTeste;
