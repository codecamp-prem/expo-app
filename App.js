import React, { useState } from "react";
import { Text, View } from "react-native";

import styles from "./App.styles";
import { ImageOption } from "./app/components/ImageOption";
import { Button } from "./app/components/Button";
import oneQuestionWithOption from "./assets/data/oneQuestionWithOption";

const App = () => {
  const [selected, setSelected] = useState(null);
  const onBtnPress = () => {
    console.warn("Btn Pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{oneQuestionWithOption.question}</Text>
      <View style={styles.optionContainerBlock}>
        {oneQuestionWithOption.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            optionName={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button btnText="Check" onPress={onBtnPress} disable={!selected} />
    </View>
  );
};

export default App;
