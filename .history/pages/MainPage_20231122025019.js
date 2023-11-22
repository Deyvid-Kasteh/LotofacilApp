import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import Resultado from '../components/Resultado';


const MainPage = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BFCDD9",
      }}
    >
      <StatusBar style="auto" />
      <Text>Lotofácil</Text>
      <MainPage />
    </View>
  );
}

export default MainPage