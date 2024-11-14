// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import useLocaleSettings from "./theme/useLocaleSettings";
import useDynamicTheme from "./theme/useDynamicTheme";
import router from "./routes/router.jsx";
import { store } from "./redux/store";
import "./index.css";
import "./configuration/i18next.js";

// Main component that sets up theme, locale, and router
const Main = () => {
  const theme = useDynamicTheme();
  const { locale, langDirection } = useLocaleSettings();

  return (
    <ConfigProvider locale={locale} direction={langDirection} theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

// Render the app to the root element
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Main />
    </StrictMode>
  </Provider>
);

export default Main;
