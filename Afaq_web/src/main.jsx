import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ConfigProvider } from 'antd';
import darkTheme from './theme/darkTheme.jsx';
import lightTheme from './theme/lightTheme.jsx';

const Main = () => {
  // State to manage the theme mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StrictMode>
      <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <App />
      </ConfigProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
