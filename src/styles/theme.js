import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: '"Montserrat", "Noto Sans JP", "IBM Plex Sans Thai"',
    body: '"Montserrat", "Noto Sans JP", "IBM Plex Sans Thai"',
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode(" #15232f", "rgba(225, 225, 225, 0.87)")(props),
        bg: mode("#fff", "#1a1a1a")(props),
      },
    }),
  },
});

export default theme;
