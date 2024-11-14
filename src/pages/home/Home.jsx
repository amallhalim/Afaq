import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Cascader,
  Select,
  Space,
  message,
  Card,
  Typography,
  Divider,
  DatePicker,
  Button,
} from "antd";
import {Option} from "antd/es/mentions";
import {db} from "../../configuration/firebase"; 
import {collection, addDoc} from "firebase/firestore";
import {toggleThemeMode} from "../../redux/features/appSlice";
import { useTranslation } from "react-i18next";
import useDynamicTheme from "../../theme/useDynamicTheme";
import LanguageToggle from "../../components/header/LanguageToggle";



const {RangePicker} = DatePicker;

export default function Home() {
  const [selectedUser, setSelectedUser] = useState("");
  const { t } = useTranslation();
  const theme = useDynamicTheme()
  
  const saveUserToFirestore = async userName => {
    try {
      await addDoc(collection(db, "test"), {
        name: userName,
        timestamp: new Date(), 
      });
      message.success(`User ${userName} saved to Firestore!`);
    } catch (error) {
      console.log("🚀 ~ saveUserToFirestore ~ error:", error);
      message.error("Error saving user to Firestore: " + error.message);
    }
  };

  const handleSelectChange = value => {
    setSelectedUser(value);
    saveUserToFirestore(value); // Save to Firestore
  };
  const dispatch = useDispatch();
  const ReduxThemeMode = useSelector(state => state.app.themeMode);
  const toggleTheme = () => {
    dispatch(toggleThemeMode(ReduxThemeMode));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{padding: "20px"}}>
        <LanguageToggle/>
        <Button onClick={toggleTheme}>Switch to {ReduxThemeMode} Mode</Button>
      </div>
        <h1>{t('title')}</h1>
                <Button
          type="primary"
          style={{
            backgroundColor: theme.token.primary.main,
            borderRadius: theme.token.borderRadius, 
          }}
        >
          Custom Themed Button
        </Button>
      <Card title="User Information" bordered={false} style={{width: 400}}>
        <Typography.Title level={4}>Select a User</Typography.Title>
        <Select
          showSearch
          style={{width: "100%", marginBottom: "20px"}}
          placeholder="Select a user"
          onChange={handleSelectChange}
          value={selectedUser}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>

        <Divider />

        <Typography.Title level={4}>Cascader Example</Typography.Title>
        <Cascader placeholder="Search Options" style={{width: "100%", marginBottom: "20px"}} />

        <Divider />

        <Typography.Title level={4}>Select Date & Time</Typography.Title>
        <Space direction="vertical" size={12} style={{width: "100%"}}>
          <DatePicker renderExtraFooter={() => "Select Date"} style={{width: "100%"}} />
          <DatePicker
            renderExtraFooter={() => "Select Date & Time"}
            showTime
            style={{width: "100%"}}
          />
          <RangePicker renderExtraFooter={() => "Select Date Range"} style={{width: "100%"}} />
          <RangePicker
            renderExtraFooter={() => "Select Date & Time Range"}
            showTime
            style={{width: "100%"}}
          />
          <DatePicker
            renderExtraFooter={() => "Select Month"}
            picker="month"
            style={{width: "100%"}}
          />
        </Space>
      </Card>
    </div>
  );
}
