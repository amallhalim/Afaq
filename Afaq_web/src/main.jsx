import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Cascader, ConfigProvider, Divider, Select, Button } from 'antd';
import darkTheme from './theme/darkTheme.jsx';
import lightTheme from './theme/lightTheme.jsx';
import { Option } from 'antd/es/mentions/index.js';
import enUS from 'antd/lib/locale/en_US'; 
import arEG from 'antd/lib/locale/ar_EG'; 
import './configuration/i18next.js'; // Your i18next config
import LanguageToggle from './componant/header/LanguageToggle.jsx';

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [langDirection, setLangDirection] = useState("rtl");
  const [currentLang, setCurrentLang] = useState(arEG);
  console.log("🚀 ~ Main ~ currentLang:", currentLang)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };



  return (
    <StrictMode>
      <ConfigProvider
        locale={currentLang}
        direction={langDirection}
        theme={isDarkMode ? darkTheme : lightTheme}
      >
        <div style={{ padding: '20px' }}>
           <LanguageToggle currentLang={currentLang} setCurrentLang={setCurrentLang} setLangDirection={setLangDirection} />
          <Button onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </Button>

       
        </div>


        
        <App />
      </ConfigProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
