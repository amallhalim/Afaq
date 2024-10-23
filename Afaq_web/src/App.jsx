import { useContext, useState } from "react";
import "./App.css";
import { Button, ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";

function App() {
  const { theme } = useContext(ConfigProvider.ConfigContext); // Access the theme values
  const { t, i18n } = useTranslation();



  return (
    <>
      <div>
        <h1>{t('title')}</h1>
        <Home/>

        <Button
          type="primary"
          style={{
            backgroundColor: theme.palette.primary.main, // Use colorPrimary from theme
            borderRadius: theme.palette.borderRadius, // Use borderRadius from theme
          }}
        >
          Custom Themed Button
        </Button>
      </div>
    </>
  );
}

export default App;
