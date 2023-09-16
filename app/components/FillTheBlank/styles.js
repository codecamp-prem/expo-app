import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    width: 100,
  },
  optionContainer: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    height: 70,
    marginVertical: 10,
  },
  text: { alignSelf: "flex-end", fontSize: 16 },
  title: { fontSize: 18, fontWeight: "bold", alignSelf: "flex-start" },
});

export default styles;
