import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bubble from "./Bubble";
import latestJson from "../Latest.json";

const Resultado = () => {
  const [viewHeight, setViewHeight] = useState(50);
  const toggleHeight = () => {
    const newHeight = viewHeight === 50 ? 200 : 50;
    setViewHeight(newHeight);
    console.log("mudou");
  };

  const dezenas = latestJson.Dezenas;
  const dezenasParaEscolher = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const changeStyle = () => {
    console.log(latestJson.Dezenas);
  };

  const renderFazerJogo = () => {
    if (viewHeight === 50) {
    } else {
      return (
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          {dezenasParaEscolher.map((numero, index) => (
            <TouchableOpacity key={index} onpre>
              <Bubble numero={numero} />
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 300,
          height: 50,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          elevation: 2,
          backgroundColor: "#687B8C",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "#E9ECF2",
            // color: "#394A59",
            fontSize: 27,
          }}
        >
          LOTOFÁCIL
        </Text>
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
          marginBottom: 10,
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

      {/* SEPARAÇÃO */}
      {/* SEPARAÇÃO */}
      <View
        style={[
          {
            width: 300,
            // height: 320,
            padding: 10,
            borderRadius: 50,

            alignItems: "center",
            elevation: 2,
            // backgroundColor: "#95ACBF",
            // backgroundColor: "#E9ECF2",
            // backgroundColor: "#394A59",
            backgroundColor: "#687B8C",
            // backgroundColor: "#BFCDD9",
          },
          viewHeight === 50
            ? { width: 250, backgroundColor: "#E9ECF2" }
            : { width: 300, backgroundColor: "#687B8C" },
        ]}
      >
        <TouchableOpacity
          style={[
            {
              width: 240,
              backgroundColor: "#394A59",
              backgroundColor: "#687B8C",
              backgroundColor: "#E9ECF2",
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
            },
            viewHeight === 50
              ? { width: 190, backgroundColor: "#BFCDD9" }
              : { width: 240, backgroundColor: "#E9ECF2" },
          ]}
          onPress={() => toggleHeight()}
        >
          <Text
            style={[
              {
                fontSize: 20,
              },
              viewHeight === 50 ? { color: "#687B8C" } : { color: "#394A59" },
            ]}
          >
            Fazer um Jogo
          </Text>
        </TouchableOpacity>
        {renderFazerJogo()}
      </View>

      {/* <View
        style={{
          width: 250,
          height: 70,
          // padding: 10,
          borderRadius: 50,
          marginTop: 10,
          alignContent: "center",
          justifyContent: "center",
          justifyContent: "space-around",
          alignItems: "center",
          elevation: 2,
          // backgroundColor: "#95ACBF",
          backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
          // backgroundColor: "#687B8C",
        }}
      >
        <TouchableOpacity
          style={{
            width: 190,
            backgroundColor: "#394A59",
            // backgroundColor: "#687B8C",
            // backgroundColor: "#E9ECF2",
            backgroundColor: "#95ACBF",
            backgroundColor: "#BFCDD9",

            // elevation: 2,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => changeStyle()}
        >
          <Text
            style={{
              color: "#E9ECF2",
              color: "#394A59",
              color: "#687B8C",

              fontSize: 20,
            }}
          >
            Estatisticas
          </Text>
        </TouchableOpacity>
      </View> */}
      {/* <View
        style={{
          width: 250,
          height: 70,
          // padding: 10,
          borderRadius: 50,
          marginTop: 10,
          alignContent: "center",
          justifyContent: "center",
          justifyContent: "space-around",
          alignItems: "center",
          elevation: 2,
          // backgroundColor: "#95ACBF",
          backgroundColor: "#E9ECF2",
          // backgroundColor: "#394A59",
          // backgroundColor: "#687B8C",
          // backgroundColor: "#BFCDD9",
          // backgroundColor: "#687B8C",
        }}
      >
        <TouchableOpacity
          style={{
            width: 190,
            backgroundColor: "#394A59",
            // backgroundColor: "#687B8C",
            // backgroundColor: "#E9ECF2",
            backgroundColor: "#95ACBF",
            backgroundColor: "#BFCDD9",

            // elevation: 2,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => changeStyle()}
        >
          <Text
            style={{
              color: "#E9ECF2",
              color: "#394A59",
              color: "#687B8C",

              fontSize: 20,
            }}
          >
            Conferir resultado
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Resultado;
