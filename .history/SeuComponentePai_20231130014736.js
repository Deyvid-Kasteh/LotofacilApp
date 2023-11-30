import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ExampleComponent = () => {
  const [viewHeight, setViewHeight] = useState(0);

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
    console.log("Altura da View:", height);
  };

  return (
    <View onLayout={onLayout}>
      {/* O conteúdo da sua View aqui */}
      <Text>Exemplo de Conteúdo</Text>
    </View>
  );
};

export default ExampleComponent;
