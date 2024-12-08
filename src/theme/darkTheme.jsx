import { theme as antdTheme } from "antd"; // Import `theme` and rename it to `antdTheme` to avoid naming conflicts

const theme = {
  fontFamily: "'lexend', sans-serif",
  algorithm: antdTheme.defaultAlgorithm, // Use `antdTheme.defaultAlgorithm` here
  token: {
    primary: {
      100: "#EEEEEE",
      500: "#495974",
      900: "#0A1A24",
    },
    secondary: {
      100: "#EEEEEE",
      500: "#495974",
      900: "#0A1A24",
    },
    customColors: {
      black: "#000000",
      red: {
        100: "#EEEEEE",
        500: "#495974",
        900: "#0A1A24",
      }
    },
    Dark: {
      darkGray1: "#495974",
    },
    text: {
      lightGray: "#8B8D97",
      lightGray2: "#8B909A",
    },
    icon: {
      lightGray: "#7E8EA7",
      graniteGray: "#626262",
    },
    border: {
      light: "#F6F7FB",
      medium: "#E5E7E8",
    },
    gray: {
      100: "#EEEEEE",
      500: "#495974",
      900: "#0A1A24",
    },
  },
}
export default theme