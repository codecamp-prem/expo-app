import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./App.styles";
import questions from "./assets/data/allQuestions";

import { ImageMultipleChoiceQuestions } from "./app/components/ImageMultipleChoiceQuestions";
import { OpenEndedQuestions } from "./app/components/OpenEndedQuestions";
import Header from "./app/components/Header/Header";

const App = () => {
  const [hasAppLoaded, setHasAppLoaded] = useState(false);
  const [lives, setLives] = useState(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  // check for local storage data when App mounts
  useEffect(() => {
    loadData();
  }, []);

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("Congrats! You Won", "Play Again", [
        {
          text: "Play Again",
          onPress: restart,
        },
      ]);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  // save data to local storage when this values changes
  useEffect(() => {
    if (hasAppLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasAppLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over", "Try Again", [
        {
          text: "Try Again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wrong");
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadLives = await AsyncStorage.getItem("lives");
    if (loadLives) {
      setLives(parseInt(loadLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }
    setHasAppLoaded(true);
  };

  if (!hasAppLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
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
