import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Inter",
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
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 32,
  },
  flastList: {
    width: "100%",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    margin: 20,
  },
  clipboard: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
