import React from "react";
import { Image, View, Text } from "react-native";

import styles from "./styles";

const ImageOption = ({ image, name }) => (
  <View style={styles.optionContainer}>
    <Image
      resizeMode="contain"
      source={{
        uri: image,
      }}
      style={styles.optionImage}
    />
    <Text style={styles.optionText}>{name}</Text>
  </View>
);
export default ImageOption;
