import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import styles from "./App.styles";
import questions from "./assets/data/imageMulatipleChoiceQuestions";
import { ImageMultipleChoiceQuestions } from "./app/components/ImageMultipleChoiceQuestions";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const onBtnPress = () => {
    if (selected.correct) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      Alert.alert("Wrong!");
    }
  };

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestions
        currentQuestion={currentQuestion}
        selected={selected}
        setSelected={setSelected}
        onBtnPress={onBtnPress}
      />
    </View>
  );
};

export default App;
