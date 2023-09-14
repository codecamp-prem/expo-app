import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#58CC02",
    borderBottomWidth: 5,
    borderColor: "#57A600",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
  disableBtnContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
});

export default styles;
