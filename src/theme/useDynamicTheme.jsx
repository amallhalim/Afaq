// hooks/useThemeMode.js
import { useSelector } from "react-redux";
import darkTheme from "../theme/darkTheme.jsx";
import lightTheme from "../theme/lightTheme.jsx";

const useThemeMode = () => {
  const themeMode = useSelector(state => state.app.themeMode);
  return themeMode === "dark" ? darkTheme : lightTheme;
};

export default useThemeMode;
