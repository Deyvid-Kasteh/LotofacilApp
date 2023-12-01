import { View, Text } from "react-native";
import React from "react";
import latestJson from "../Latest.json";
import * as Cores from "../assets/Cores";

const dezenas = latestJson.Dezenas;

const Jogo = () => {
  return (
    <View
      style={{
        width: 320,
        height: 26,
        // borderWidth: 1,
        backgroundColor: Cores.cor2,

        borderColor: "black",
        borderRadius: 20,
        flexWrap: "nowrap",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 10,
      }}
    >
      <View
        style={{
          width: 320,
          height: 26,
          // borderWidth: 1,
          backgroundColor: Cores.cor2,

          borderColor: "black",
          borderRadius: 20,
          flexWrap: "nowrap",
          flexDirection: "row",
          marginBottom: 10,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 10,
        }}
      >
        {dezenas.map((numero, index) => (
          <View
            key={index}
            style={{
              width: 15,
              height: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              backgroundColor: Cores.cor1,
              margin: 1,
            }}
          >
            <Text
              style={{
                fontSize: 9,
                color: Cores.cor5,
              }}
            >
              {numero}
            </Text>
          </View>
        ))}
        {/* <View><Text>Excluir</Text></View> */}
        <View
          style={{
            width: 15,
            height: 15,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            backgroundColor: Cores.cor1,
            margin: 1,
          }}
        >
          <Text
            style={{
              fontSize: 9,
              color: Cores.cor5,
            }}
          >
            X
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Jogo;
