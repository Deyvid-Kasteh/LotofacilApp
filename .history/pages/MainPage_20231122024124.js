import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";


const MainPage = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2E2C4",
      }}
    >
      <StatusBar style="auto" />
      <Text>Lotofá</Text>
    </View>
  );
}

export default MainPage