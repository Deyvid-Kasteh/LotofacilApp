import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";


const Resultado = () => {
  const [backgroundColor, setBackgroundColor] = useState("#95ACBF");
  const [opacity, setopacity] = useState(null);
  const objetoLatest = JSON.parse(latestJson);


  const changeStyle = () => {
    // Lógica para mudar o estilo
    if (backgroundColor === "#95ACBF") {
      setBackgroundColor("#394A59")
          console.log("222222");
    } else {
      setBackgroundColor("#95ACBF")
          console.log("111111");
    }
    console.log("teste")
  };



  return (
    <View>
      <View
        style={{
          width: 300,
          height: 220,
          padding: 10,
          borderRadius: 10,
          flexWrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-evenly",
          elevation: 5,
          backgroundColor: "#95ACBF",

          // alignItems: "center",
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#394A59",
            padding: 10,
            borderRadius: 6,
            margin: 8,
          }}
          onPress={() => changeStyle()}
        >
          <Text
            style={{
              color: "#E9ECF2",
              fontSize: 20,
            }}
          >
            Último Resultado
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
          <Bubble/>
        </View>
      </View>
      <View
        style={{
          width: 300,
          height: 110,
          padding: 10,
          borderRadius: 10,
          flexWrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-evenly",
          elevation: 5,
          backgroundColor: backgroundColor,
          marginTop: 10,

          // alignItems: "center",
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      ></View>
    </View>
  );
};

export default Resultado;
