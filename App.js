import React from "react";
import { Text, View } from "react-native";

import styles from "./App.styles";
import { ImageOption } from "./app/components/ImageOption";
import oneQuestionWithOption from "./assets/data/oneQuestionWithOption";

const App = () => (
  <View style={styles.root}>
    <Text style={styles.title}>{oneQuestionWithOption.question}</Text>
    <View style={styles.optionContainerBlock}>
      {oneQuestionWithOption.options.map((option) => (
        <ImageOption key={option.id} image={option.image} name={option.text} />
      ))}
    </View>
  </View>
);

export default App;
