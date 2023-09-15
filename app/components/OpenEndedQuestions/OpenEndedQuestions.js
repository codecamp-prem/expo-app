import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import PropTypes from "prop-types";

import { Button } from "../Button";
import mascot from "../../../assets/images/mascot.png";
import styles from "./styles";

const OpenEndedQuestions = ({
  currentQuestion,
  onCorrect,
  onWrong,
  selected = true,
}) => {
  const [input, setInput] = useState("");
  const onBtnPress = () => {
    if (
      currentQuestion.answer.toLowerCase().trim() ===
      input.toLocaleLowerCase().trim()
    ) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{currentQuestion.text}</Text>
        </View>
      </View>
      <TextInput
        multiline
        onChangeText={setInput}
        placeholder="Type in English"
        style={styles.textInput}
        textAlignVertical="top"
        value={input}
      />
      <Button btnText="Check" onPress={onBtnPress} disable={!selected} />
    </>
  );
};

OpenEndedQuestions.propTypes = {
  currentQuestion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
};

OpenEndedQuestions.defaultProps = {
  onCorrect: () => {},
  onWrong: () => {},
};

export default OpenEndedQuestions;
