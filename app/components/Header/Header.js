import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";
import heart from "../../../assets/images/heart.png";
import ProgressBar from "../ProgressBar/ProgressBar";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.header}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.heart} resizeMode="contain" />
      <Text style={styles.heartLives}>{lives}</Text>
    </View>
  );
};
export default Header;
