import React from "react";
import { Image, Pressable, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ImageOption = ({ image, optionName, isSelected, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
  >
    <Image
      resizeMode="contain"
      source={{
        uri: image,
      }}
      style={styles.optionImage}
    />
    <Text style={isSelected ? styles.selectedText : styles.optionText}>
      {optionName}
    </Text>
  </Pressable>
);
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  optionName: PropTypes.string,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  isSelected: false,
  optionName: "predeterminada",
  onPress: () => {},
};

export default ImageOption;
