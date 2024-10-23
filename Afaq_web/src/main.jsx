import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Cascader, ConfigProvider, Divider, Select } from 'antd';
import darkTheme from './theme/darkTheme.jsx';
import lightTheme from './theme/lightTheme.jsx';
import { Option } from 'antd/es/mentions/index.js';
import enUS from 'antd/lib/locale/en_US'; 
import arEG from 'antd/lib/locale/ar_EG'; 

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [langDirection, setLangDirection] = useState("rtl");
  const [currentLang, setCurrentLang] = useState(arEG);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLang = () => {
    if (currentLang === enUS) {
      setCurrentLang(arEG); 
      setLangDirection("rtl"); 
    } else {
      setCurrentLang(enUS);
      setLangDirection("ltr"); 
    }
  };

  return (
    <StrictMode>
      <ConfigProvider
        locale={currentLang}
        direction={langDirection}
        theme={isDarkMode ? darkTheme : lightTheme}
      >
        <div style={{ padding: '20px' }}>
          <button onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
          <button onClick={toggleLang} style={{ marginLeft: '10px' }}>
            Switch to {currentLang === enUS ? 'Arabic (RTL)' : 'English (LTR)'}
          </button>
        </div>

        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>

        <Divider orientation="left">Cascader example</Divider>
        <Cascader placeholder="Search" placement="bottomLeft" />
        
        <App />
      </ConfigProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
