import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import Resultado from '../components/Resultado';
import PaginaTesteee from '../paginaTESTE';
import Teste2pagina from '../paginaTESTE2';
import SeuComponentePai from '../SeuComponentePai';
import ResultadoTexte from '../components/ResultadoTexte';
import MostrarJogosSalvos from '../components/MostrarJogosSalvos';
import ResultadoTexteParaFazerCorreções from '../paginaTESTE';
import PickerTeste from '../paginaTESTE';






const MainPage = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#BFCDD9",
      }}
    >
      <StatusBar style="auto" />
      {/* <Text>Lotofácil</Text> */}
      {/* <Resultado /> */}
      {/* <PaginaTesteee /> */}
      {/* <Teste2pagina/> */}
      {/* <SeuComponentePai/> */}
      {/* <ResultadoTexte /> */}
      {/* <PickerTeste /> */}
      {/* <ResultadoTexte2/> */}
      {/* <MostrarJogosSalvos /> */}
    </View>
  );
}

export default MainPage