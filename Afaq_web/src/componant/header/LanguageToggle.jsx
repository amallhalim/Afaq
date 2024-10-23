import { Button } from 'antd';
import enUS from 'antd/lib/locale/en_US'; 
import arEG from 'antd/lib/locale/ar_EG'; 
import { useTranslation } from 'react-i18next';

const LanguageToggle = ({ currentLang, setCurrentLang, setLangDirection }) => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    if (currentLang === enUS) {
      setCurrentLang(arEG);
      setLangDirection("rtl");
      i18n.changeLanguage('ar');
    } else {
      setCurrentLang(enUS);
      setLangDirection("ltr");
      i18n.changeLanguage('en');
    }
  };

  return (
    <Button onClick={toggleLang} style={{ marginLeft: '10px' }}>
      Switch to {currentLang === enUS ? 'Arabic (RTL)' : 'English (LTR)'}
    </Button>
  );
};

export default LanguageToggle;
