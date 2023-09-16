import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const WordOption = ({ onPress, text, isSelected }) => {
  return (
    <Pressable
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgrey" : "white" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color: isSelected ? "lightgrey" : "black" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderColor: "lightgrey",
    borderBottomWidth: 4,
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  text: {},
});
export default WordOption;
