import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  heart: { height: 30, marginHorizontal: 10, width: 30 },
  heartLives: { color: "red", fontWeight: "bold", fontSize: 18 },
});

export default styles;
