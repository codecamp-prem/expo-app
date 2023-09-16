import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import styles from "./App.styles";
import questions from "./assets/data/allQuestions";

import { ImageMultipleChoiceQuestions } from "./app/components/ImageMultipleChoiceQuestions";
import { OpenEndedQuestions } from "./app/components/OpenEndedQuestions";
import Header from "./app/components/Header/Header";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const onWrong = () => {
    Alert.alert("Wrong");
  };
  //Alert.alert(currentQuestion);
  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} />
      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <Text>FILL_IN_THE_BLANK</Text>
      )}
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestions
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestions
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
};

export default App;
