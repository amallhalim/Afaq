import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import arEG from "antd/lib/locale/ar_EG";

import darkTheme from "./theme/darkTheme.jsx";
import lightTheme from "./theme/lightTheme.jsx";
import "./configuration/i18next.js";

import App from "./App.jsx";
import LanguageToggle from "./componant/header/LanguageToggle.jsx";
import { Provider, useSelector } from "react-redux";
import { store} from "./redux/store.js"
import "./index.css";

const Main = () => {
  const [langDirection, setLangDirection] = useState("rtl");
  const [currentLang, setCurrentLang] = useState(arEG);
  const ReduxThemeMode = useSelector((state) => state.app.themeMode);

  return (
    <ConfigProvider
      locale={currentLang}
      direction={langDirection}
      theme={ReduxThemeMode === "dark" ? darkTheme : lightTheme}
    >
      <div style={{ padding: "20px" }}>
        <LanguageToggle
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          setLangDirection={setLangDirection}
        />
      </div>
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
