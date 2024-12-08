import { theme as antdTheme } from "antd"; // Import `theme` and rename it to `antdTheme` to avoid naming conflicts

const theme = {
  fontFamily: "'lexend', sans-serif",
  algorithm: antdTheme.defaultAlgorithm, // Use theme.defaultAlgorithm or theme.darkAlgorithm as needed
  token: {
    primary: {
      100: "#3EC5FA",
      200: "#8AD8FA",
    },
    secondary: {
      100: "#172B4D",
    },
    customColors: {
      black:{100: "#000000"},
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
      gray: {100:"#E5E7E8",200:"#E5E7E8",300:"#E5E7E8"}
    },
    gray: {
      100: "#EEEEEE",
      200: "#F4F4F4",
      300: "#F6F7F9",
    },
  },
};

export default theme;
