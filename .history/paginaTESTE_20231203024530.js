import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PickerTeste = () => {
  // // Função para gerar um número aleatório entre min e max (inclusive)
  // const getRandomNumber = (min, max) =>
  //   Math.floor(Math.random() * (max - min + 1)) + min;

  // // Função para criar um array com números distintos entre 1 e 25
  // const generateDistinctNumbers = (count) => {
  //   const numbers = [];
  //   while (numbers.length < count) {
  //     const newNumber = getRandomNumber(1, 25);
  //     if (!numbers.includes(newNumber)) {
  //       numbers.push(newNumber);
  //     }
  //   }
  //   return numbers;
  // };

  // // Função para gerar o Array pai com 20 Arrays filhos
  // const generateParentArray = () => {
  //   const parentArray = [];
  //   for (let i = 0; i < 20; i++) {
  //     const childArray = generateDistinctNumbers(15);
  //     parentArray.push(childArray);
  //   }
  //   return parentArray;
  // };

  // // Função para ordenar os Arrays filhos com base na quantidade de números iguais com o Array C
  // const sortArraysByMatchingNumbers = (parentArray, arrayC) => {
  //   parentArray.sort((a, b) => {
  //     const matchingNumbersA = a.filter((num) => arrayC.includes(num)).length;
  //     const matchingNumbersB = b.filter((num) => arrayC.includes(num)).length;
  //     return matchingNumbersB - matchingNumbersA;
  //   });
  // };

  // // Criar o Array C com 15 números distintos
  // const arrayC = generateDistinctNumbers(15);

  // // Criar o Array pai com 20 Arrays filhos
  // const parentArray = generateParentArray();

  // // Ordenar os Arrays filhos com base na quantidade de números iguais com o Array C
  // sortArraysByMatchingNumbers(parentArray, arrayC);

  // // Exibir o resultado
  // console.log("Array C:", arrayC);
  // console.log("Array Pai ordenado:", parentArray);

  // Função para gerar um número aleatório entre min e max (inclusive)
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Função para criar um array com números distintos entre 1 e 25
  const generateDistinctNumbers = (count) => {
    const numbers = [];
    while (numbers.length < count) {
      const newNumber = getRandomNumber(1, 25);
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
      }
    }
    return numbers;
  };

  // Função para gerar o Array pai com 20 Arrays filhos
  const generateParentArray = () => {
    const parentArray = [];
    for (let i = 0; i < 20; i++) {
      const childArray = generateDistinctNumbers(15);
      parentArray.push(childArray);
    }
    return parentArray;
  };

  // Função para organizar os Arrays filhos dentro de um objeto
  const organizeArraysByMatchingNumbers = (parentArray, arrayC) => {
    const organizedObject = {};
    parentArray.forEach((childArray) => {
      const matchingNumbers = childArray.filter((num) =>
        arrayC.includes(num)
      ).length;
      if (!organizedObject[matchingNumbers]) {
        organizedObject[matchingNumbers] = [];
      }
      organizedObject[matchingNumbers].push(childArray);
    });
    return organizedObject;
  };

  // Criar o Array C com 15 números distintos
  const arrayC = generateDistinctNumbers(15);

  // Criar o Array pai com 20 Arrays filhos
  const parentArray = generateParentArray();

  // Organizar os Arrays filhos dentro de um objeto
  const organizedObject = organizeArraysByMatchingNumbers(parentArray, arrayC);

  // Exibir o resultado
  console.log("Array C:", arrayC);
  console.log(
    "Arrays organizados por quantidade de números iguais:",
    organizedObject
  );

  // Transformar o objeto em JSON
  const organizedJson = JSON.stringify(organizedObject);
    const organizedJsonParsed = JSON.(organizedJson);


  // Exibir o resultado em JSON
  console.log("Arrays organizados em JSON:", organizedJson);
};



export default PickerTeste;
