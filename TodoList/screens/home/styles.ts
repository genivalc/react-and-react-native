import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
  },
  topHalf: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHalf: {
    flex: 4,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 32,
  },
});
