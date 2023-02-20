// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/space-mono";
import "@fontsource/roboto";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  ...config,
  fonts: {
    heading: "Space Mono",
    body: "Roboto",
  },
});

export default theme;
