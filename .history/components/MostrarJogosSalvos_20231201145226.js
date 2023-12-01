// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Bolhas from "../Bolhas";

// const MostrarJogosSalvos = () => {
//   const [jogosSalvos, setJogosSalvos] = useState([]);

//   useEffect(() => {
//     const carregarJogosSalvos = async () => {
//       try {
//         const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
//         const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];
//         setJogosSalvos(jogosSalvos);
//       } catch (error) {
//         console.error("Erro ao carregar jogos salvos:", error);
//       }
//     };

//     carregarJogosSalvos();
//   }, []);

//   const renderNumerosJogo = (jogo) => {
//     return jogo.numerosSelecionados.map((numero, index) => (
//       <Bolhas key={index} numero={numero} />
//     ));
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={() => console.log("Mostrar jogos salvos")}>
//         <Text>Mostrar Jogos Salvos</Text>
//       </TouchableOpacity>

//       {jogosSalvos.length === 0 ? (
//         <Text>Nenhum jogo salvo ainda</Text>
//       ) : (
//         jogosSalvos.map((jogo, index) => (
//           <View
//             key={index}
//             style={{ flexDirection: "row", alignItems: "center" }}
//           >
//             {renderNumerosJogo(jogo)}
//           </View>
//         ))
//       )}
//     </View>
//   );
// };

// export default MostrarJogosSalvos;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Jogo

const MostrarJogosSalvos = () => {
  const [jogosSalvos, setJogosSalvos] = useState([]);

  useEffect(() => {
    const carregarJogosSalvos = async () => {
      try {
        const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
        const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];
        setJogosSalvos(jogosSalvos);
      } catch (error) {
        console.error("Erro ao carregar jogos salvos:", error);
      }
    };

    carregarJogosSalvos();
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={() => console.log("Mostrar jogos salvos")}>
        <Text>Mostrar Jogos Salvos</Text>
      </TouchableOpacity>

      {jogosSalvos.length === 0 ? (
        <Text>Nenhum jogo salvo ainda</Text>
      ) : (
        jogosSalvos.map((jogo, index) => (
          <Jogo key={index} numerosSelecionados={jogo.numerosSelecionados} />
        ))
      )}
    </View>
  );
};

export default MostrarJogosSalvos;

