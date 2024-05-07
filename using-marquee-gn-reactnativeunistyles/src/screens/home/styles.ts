import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 94,
    backgroundColor: theme.colors.background,
  },
  toggleTheme: {
    alignSelf: "flex-end",
    marginBottom: 42,
  },
}));
