import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainerBlock: {
    alignContent: "space-between",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  root: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold", alignSelf: "stretch" },
});

export default styles;
