import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,
    //size
    height: "48%",
    width: "48%",
    //spacing
    padding: 10,
  },
  optionImage: {
    flex: 1,
    width: "100%",
  },
  optionText: { color: "black", fontWeight: "bold" },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  selectedText: {
    color: "#40BEF7",
    fontWeight: "bold",
  },
});

export default styles;
