import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {ConfigProvider} from "antd";
import "./configuration/i18next.js";
import App from "./App.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import "./index.css";

import useDynamicTheme from "./theme/useDynamicTheme.jsx";
import useLocaleSettings from "./theme/useLocaleSettings.js";

const Main = () => {
  const theme = useDynamicTheme();
  const { locale, langDirection } = useLocaleSettings();


  return (
    <ConfigProvider
      locale={locale}
      direction={langDirection}
      theme={theme}
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
