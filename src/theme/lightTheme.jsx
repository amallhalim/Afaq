import { theme as antdTheme } from "antd"; // Import `theme` and rename it to `antdTheme` to avoid naming conflicts

const theme = {
  fontFamily: "'lexend', sans-serif",
  algorithm: antdTheme.defaultAlgorithm, // Use theme.defaultAlgorithm or theme.darkAlgorithm as needed
  token: {
    primary: {
      main: "#3EC5FA",
      babyBlue: "#8AD8FA",
    },
    secondary: {
      main: "#172B4D",
    },
    customColors: {
      black: "#000000",
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
      gray: "#E5E7E8",
      grayTransparent: "#EEEEEE7A",
    },
    gray: {
      gray1: "#EEEEEE",
      gray2: "#F4F4F4",
      gray3: "#F6F7F9",
    },
  },
};

export default theme;
