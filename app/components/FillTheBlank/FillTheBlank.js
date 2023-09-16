import React, { useState } from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import { Button } from "../Button";
import WordOption from "../WordOption/WordOption";

const FillTheBlank = ({ currentQuestion, onCorrect, onWrong }) => {
  const [parts, setParts] = useState(currentQuestion.parts);

  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  const checkIfCorrect = () => {
    return (
      parts.filter((part) => part.isBlank && part.selected !== part.text)
        .length === 0
    );
  };

  const addOptionToSelected = (option) => {
    if (isSelected(option)) {
      return;
    }

    const newParts = [...parts];
    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        break;
      }
    }
    setParts(newParts);
  };

  const removeSelectedAt = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const isSelected = (option) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };

  const isReadyToCheck = () => {
    return parts.filter((part) => part.isBlank && !part.selected).length > 0;
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        {parts.map((part, index) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank}>
                {part.selected && (
                  <WordOption
                    key={part.selected}
                    text={part.selected}
                    onPress={() => removeSelectedAt(index)}
                  />
                )}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>

      <View style={styles.optionContainer}>
        {currentQuestion.options.map((option) => (
          <WordOption
            text={option}
            isSelected={isSelected(option)}
            onPress={() => addOptionToSelected(option)}
          />
        ))}
      </View>

      <Button
        btnText="Check"
        onPress={onButtonPress}
        disable={isReadyToCheck()}
      />
    </>
  );
};

export default FillTheBlank;
