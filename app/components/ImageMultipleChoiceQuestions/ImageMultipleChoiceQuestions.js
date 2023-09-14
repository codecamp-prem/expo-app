import React from "react";
import { Text, View } from "react-native";

import { ImageOption } from "../ImageOption";
import { Button } from "../Button";
import styles from "./styles";

const ImageMultipleChoiceQuestions = ({
  currentQuestion,
  selected,
  setSelected,
  onBtnPress,
}) => {
  return (
    <>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionContainerBlock}>
        {currentQuestion.options.map((option) => (
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
    </>
  );
};
export default ImageMultipleChoiceQuestions;
