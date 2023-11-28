import { View, Text } from "react-native";
import React from "react";

const Bubble = (props) => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        // backgroundColor: "#394A59",
        backgroundColor: "#687B8C",

        borderRadius: 50,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
        // elevation: 5,
        opacity: 1,
      }}
    >
      <Text
        style={{
          color: "#E9ECF2",
          fontSize: 20,
        }}
      >
        {props.numero}
      </Text>
    </View>
  );
};

export default Bubble;
