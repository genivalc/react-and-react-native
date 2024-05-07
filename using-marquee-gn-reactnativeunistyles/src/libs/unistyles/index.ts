import { UnistylesRegistry } from "react-native-unistyles";
import { dark, light } from "./theme";
import { breakpoint } from "./tokens/breakpoints";

type AppBreakpoint = typeof breakpoint;

interface AppTheme {
  light: typeof light;
  dark: typeof dark;
}

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoint {}
  export interface unistylesThemes extends AppTheme {}
}

UnistylesRegistry.addBreakpoints(breakpoint)
  .addThemes({
    light,
    dark,
  })
  .addConfig({
    initialTheme: "dark",
  });
