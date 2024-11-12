import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {ConfigProvider} from "antd";
import enUS from "antd/lib/locale/en_US";
import arEG from "antd/lib/locale/ar_EG";

import darkTheme from "./theme/darkTheme.jsx";
import lightTheme from "./theme/lightTheme.jsx";
import "./configuration/i18next.js";

import App from "./App.jsx";
import {Provider, useSelector} from "react-redux";
import {store} from "./redux/store.js";
import "./index.css";

const Main = () => {
  const ReduxSystemLang = useSelector(state => state.app.systemLang);
  const ReduxThemeMode = useSelector(state => state.app.themeMode);
  const ReduxLangDirection = useSelector(state => state.app.langDirection);

  return (
    <ConfigProvider
      locale={ReduxSystemLang == "ar" ? arEG : enUS}
      direction={ReduxLangDirection}
      theme={ReduxThemeMode === "dark" ? darkTheme : lightTheme}
    >
      <App />
    </ConfigProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Main />
    </StrictMode>
  </Provider>
);
