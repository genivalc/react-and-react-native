import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  name: {
    flex: 1,
    fontSize: 14,
    color: "#F2F2F2",
    paddingLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonImagem: {
    color: "#FFF",
  },

  radioButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#4EA8DE",
    borderRadius: 100,
    padding: 7,
  },
  selected: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
  },
  nameSelected: {
    flex: 1,
    color: "#808080",
    textDecorationLine: "line-through",
    fontSize: 14,
    paddingLeft: 16,
  },
  created: {
    color: "#4EA8DE",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 25,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 18,
  },
  completed: { color: "#8284FA" },
  completedAll: {},
});
