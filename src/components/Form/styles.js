import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#bcbcbc",
    padding: 10,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  switchInput: {
    flex: 1,
    flexDirection: "row",
    item: {
      flex: 1,
    },
  },
  buttonContainer: {
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
  },
});

export default styles;
