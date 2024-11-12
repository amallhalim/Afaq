// hooks/useLocaleSettings.js
import {useSelector} from "react-redux";
import arEG from "antd/lib/locale/ar_EG";
import enUS from "antd/lib/locale/en_US";

const useLocaleSettings = () => {
  const systemLang = useSelector(state => state.app.systemLang);
  const langDirection = useSelector(state => state.app.langDirection);

  const locale = systemLang === "ar" ? arEG : enUS;
  return {locale, langDirection};
};

export default useLocaleSettings;
