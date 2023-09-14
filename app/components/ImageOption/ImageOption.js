import React from "react";
import { Image, View, Text } from "react-native";
import PropTypes from "prop-types";

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
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// default if correct type is not send: nothing is send not wrong type
// ImageOption.propTypes = {
//   name: "Cato predeterminada",
// };

export default ImageOption;
