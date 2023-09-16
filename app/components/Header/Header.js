import React from "react";
import { View } from "react-native";

import styles from "./styles";
import ProgressBar from "../ProgressBar/ProgressBar";

const Header = ({ progress }) => {
  return (
    <View style={styles.header}>
      <ProgressBar progress={progress} />
    </View>
  );
};
export default Header;
