import React, { useState } from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";

const PickerTeste = () => {
  //   const getRandomNumber = (min, max) =>
  //     Math.floor(Math.random() * (max - min + 1)) + min;

  //   // Função para criar um array com números distintos entre 1 e 25
  //   const generateDistinctNumbers = (count) => {
  //     const numbers = [];
  //     while (numbers.length < count) {
  //       const newNumber = getRandomNumber(1, 25);
  //       if (!numbers.includes(newNumber)) {
  //         numbers.push(newNumber);
  //       }
  //     }
  //     return numbers;
  //   };

  //   // Função para gerar o Array pai com 20 Arrays filhos
  //   const generateParentArray = () => {
  //     const parentArray = [];
  //     for (let i = 0; i < 20; i++) {
  //       const childArray = generateDistinctNumbers(15);
  //       parentArray.push(childArray);
  //     }
  //     return parentArray;
  //   };

  //   // Função para organizar os Arrays filhos dentro de um objeto
  //   const organizeArraysByMatchingNumbers = (parentArray, arrayC) => {
  //     const organizedObject = {};
  //     parentArray.forEach((childArray) => {
  //       const matchingNumbers = childArray.filter((num) =>
  //         arrayC.includes(num)
  //       ).length;
  //       if (!organizedObject[matchingNumbers]) {
  //         organizedObject[matchingNumbers] = [];
  //       }
  //       organizedObject[matchingNumbers].push(childArray);
  //     });
  //     return organizedObject;
  //   };

  //   // Criar o Array C com 15 números distintos
  //   const arrayC = generateDistinctNumbers(15);

  //   // Criar o Array pai com 20 Arrays filhos
  //   const parentArray = generateParentArray();

  //   // Organizar os Arrays filhos dentro de um objeto
  //   const organizedObject = organizeArraysByMatchingNumbers(parentArray, arrayC);

  //   // Exibir o resultado
  //   console.log("Array C:", arrayC);
  //   console.log(
  //     "Arrays organizados por quantidade de números iguais:",
  //     organizedObject
  //   );

  //   // Transformar o objeto em JSON
  //   const organizedJson = JSON.stringify(organizedObject);
  //   const organizedJsonParsed = JSON.parse(organizedJson);

  //   // Exibir o resultado em JSON
  //   console.log("Arrays organizados em JSON:", organizedJson);
  //   console.log("Arrays organizados em JSON:", organizedJsonParsed);

  //   // Obter as chaves do objeto
  //   const keys = Object.keys(organizedObject);

  //   // Ordenar as chaves por ordem decrescente
  //   keys.sort((a, b) => b - a);

  //   // Criar um novo objeto organizado com as chaves ordenadas
  //   const organizedObjectSorted = {};
  //   keys.forEach((key) => {
  //     organizedObjectSorted[key] = organizedObject[key];
  //   });

  //   // Transformar o objeto ordenado em JSON
  //   const organizedJsonSorted = JSON.stringify(organizedObjectSorted);

  //   // Exibir o resultado em JSON
  //   console.log(
  //     "Arrays organizados em JSON (ordenado por quantidade de números iguais, decrescente):",
  //     organizedJsonSorted
  //   );

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
    newArrayFilhos.forEach((arrayFilho) => {
      const quantidadeNumerosIguais = arrayFilho.filter((numero) =>
        newArrayC.includes(numero)
      ).length;
      if (!organizedObject[quantidadeNumerosIguais]) {
        organizedObject[quantidadeNumerosIguais] = [];
      }
      organizedObject[quantidadeNumerosIguais].push(arrayFilho);
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Array C:</Text>
        <Text style={styles.jsonText}>{JSON.stringify(arrayC)}</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.text}>Arrays Filhos:</Text>
        <ScrollView horizontal>
          <Text style={styles.jsonText}>{JSON.stringify(arraysFilhos)}</Text>
        </ScrollView>
      </View>

      {showArraysOrdenados && (
        <View style={styles.view}>
          <Text style={styles.text}>Arrays Ordenados:</Text>
          <ScrollView>
            <Text style={styles.jsonText}>{arraysOrdenados}</Text>
          </ScrollView>
        </View>
      )}

      <Button title="Organizar Arrays" onPress={organizeArrays} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: "",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  view: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  jsonText: {
    fontSize: 14,
    color: "#333333",
  },
});


export default PickerTeste;
