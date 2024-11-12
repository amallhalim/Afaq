import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";
import useDynamicTheme from "./theme/useDynamicTheme";

function App() {
  const { t } = useTranslation();
  const theme  = useDynamicTheme()



  return (
    <>
      <div>
        <h1>{t('title')}</h1>
                <Button
          type="primary"
          style={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: theme.palette.borderRadius, 
          }}
        >
          Custom Themed Button
        </Button>
        <Home/>


      </div>
    </>
  );
}

export default App;
