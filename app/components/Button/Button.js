import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Button = ({ btnText, onPress, disable }) => {
  return (
    <Pressable
      style={[styles.btnContainer, disable ? styles.disableBtnContainer : {}]}
      onPress={onPress}
      disabled={disable}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  onPress: PropTypes.func,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  btnText: "Presionarme",
  onPress: () => {},
  disable: false,
};
export default Button;
