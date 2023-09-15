import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mascot: { width: "30%", aspectRatio: 3 / 4, marginRight: 10 },
  row: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
  sentence: { fontSize: 16 },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    alignSelf: "stretch",
    backgroundColor: "#ebebeb",
    borderColor: "lightgrey",
    borderRadius: 10,
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  title: { fontSize: 18, fontWeight: "bold", alignSelf: "flex-start" },
});

export default styles;
