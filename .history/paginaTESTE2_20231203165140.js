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
