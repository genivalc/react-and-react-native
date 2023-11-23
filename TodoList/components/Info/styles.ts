import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 12,
    justifyContent: "space-between",
  },
  createdText: {
    color: "#4EA8DE",
  },
  created: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 24,
    height: 19,
    borderRadius: 99,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "#D9D9D9",
  },
  completed: { color: "#8284FA" },
});
