import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";


const Resultado = () => {
  const [backgroundColor, setBackgroundColor] = useState("#95ACBF");
  const [opacity, setopacity] = useState(null);
  const dezenas = latestJson.Dezenas





  const changeStyle = () => {
    console.log(latestJson.Dezenas);
    // Lógica para mudar o estilo
    // if (backgroundColor === "#95ACBF") {
    //   setBackgroundColor("#394A59")
    //       console.log("222222");
    // } else {
    //   setBackgroundColor("#95ACBF")
    //       console.log("111111");
    // }
    // console.log("teste")
  };



  return (
    <View>
      <View
        style={{
          width: 300,
          height: 50,
          padding: 10,
          borderRadius: 50,

          alignItems: "center",
          elevation: 2,

          backgroundColor: "#687B8C",
          marginBottom: 10
        }}
      >
        <Text
            style={{
              color: "#E9ECF2",
              color: "#394A59",

              fontSize: 20,
            }}
          >
LOTOFACIL          </Text>

      </View>
      <View
        style={{
          width: 300,
          height: 230,
          padding: 10,
          borderRadius: 50,
          // flexWrap: "wrap",
          // flexDirection: "row",
          // alignContent: "center",
          // justifyContent: "flex-start",
          alignItems: "center",
          elevation: 2,

          // backgroundColor: "#95ACBF",
          // backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      >
        <TouchableOpacity
          style={{
            width: 240,
            backgroundColor: "#394A59",
            backgroundColor: "#687B8C",
            backgroundColor: "#E9ECF2",

            elevation: 5,
            // alignContent: "center",
            justifyContent: "center",
            alignItems: "center",

            padding: 10,
            borderRadius: 20,
            marginBottom: 5,
          }}
          onPress={() => changeStyle()}
        >
          <Text
            style={{
              color: "#E9ECF2",
              color: "#394A59",

              fontSize: 20,
            }}
          >
            Último Sorteio
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
          {dezenas.map((numero, index) => (
            <Bubble key={index} numero={numero} />
          ))}
        </View>
      </View>
      <View
        style={{
          width: 300,
          height: 230,
          padding: 10,
          borderRadius: 50,
          elevation: 5,
          marginTop: 10,
          backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      ></View>
      <View
        style={{
          width: 300,
          height: 230,
          padding: 10,
          borderRadius: 50,
          elevation: 5,
          marginTop: 10,
          backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
        }}
      ></View>
    </View>
  );
};

export default Resultado;
