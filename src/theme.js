import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#d57463",
      },
      secondary: {
        main: "#ff6347",
        surface: "#F8F9FA",
        400: "#DEDEDE",
      },
    },
  })
);
