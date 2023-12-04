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

// Exibir o resultado em JSON
console.log("Arrays organizados em JSON:", organizedJson);

// Obter as chaves do objeto
const keys = Object.keys(organizedObject);
consolo.log(keys)

// Ordenar as chaves por ordem decrescente
keys.sort((a, b) => b - a);

// Criar um novo objeto organizado com as chaves ordenadas
const organizedObjectSorted = {};
keys.forEach((key) => {
  organizedObjectSorted[key] = organizedObject[key];
});

// Transformar o objeto ordenado em JSON
const organizedJsonSorted = JSON.stringify(organizedObjectSorted);

// Exibir o resultado em JSON
console.log(
  "Arrays organizados em JSON (ordenado por quantidade de números iguais, decrescente):",
  organizedJsonSorted
);
