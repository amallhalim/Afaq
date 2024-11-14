import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeSystemLang } from '../../redux/features/appSlice';

const LanguageToggle= () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

const ReduxSystemLang = useSelector((state)=>state.app.systemLang)
  
  const toggleLang = () => {
    if (ReduxSystemLang === "en") {
      dispatch(changeSystemLang({ systemLang:"ar",langDirection:"rtl"}))
      i18n.changeLanguage('ar');
    } else {
      dispatch(changeSystemLang({ systemLang:"en",langDirection:"ltr"}))
      i18n.changeLanguage('en');
    }
  };

  return (
    <Button onClick={toggleLang} style={{ marginLeft: '10px' }}>
      Switch to {ReduxSystemLang === "en" ? 'Arabic (RTL)' : 'English (LTR)'}
    </Button>
  );
};

export default LanguageToggle;
