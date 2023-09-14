import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import PropTypes from "prop-types";

import { ImageOption } from "../ImageOption";
import { Button } from "../Button";
import styles from "./styles";

const ImageMultipleChoiceQuestions = ({
  currentQuestion,
  onCorrect,
  onWrong,
}) => {
  const [selected, setSelected] = useState(null);
  const onBtnPress = () => {
    if (selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };

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

ImageMultipleChoiceQuestions.propTypes = {
  currentQuestion: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};
export default ImageMultipleChoiceQuestions;
