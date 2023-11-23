import { View, Text } from "react-native";
import React from "react";

const Bubble = () => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        backgroundColor: "#394A59",
        borderRadius: 50,
        alignContent: "center",
        justifyContent: "center",
              alignItems: "center",
        margin: 5,
      }}
    >
      <Text
        style={{
          color: "#E9ECF2",
        }}
      >
        01
      </Text>
    </View>
  );
};

export default Bubble;
