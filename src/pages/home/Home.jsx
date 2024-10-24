import React, { useState } from "react";
import { Cascader, Select, Space, message, Card, Typography, Divider, DatePicker } from "antd";
import { Option } from "antd/es/mentions";
import { db } from "../../configuration/firebase"; // Import your Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import { Counter } from "./Counter";

const { RangePicker } = DatePicker;

export default function Home() {
  const [selectedUser, setSelectedUser] = useState("");

  // Function to handle saving the selected user to Firestore
  const saveUserToFirestore = async (userName) => {
    try {
      // Add the user name to the "test" collection
      await addDoc(collection(db, "test"), {
        name: userName,
        timestamp: new Date(), // optional: adding a timestamp
      });
      message.success(`User ${userName} saved to Firestore!`);
    } catch (error) {
      console.log("🚀 ~ saveUserToFirestore ~ error:", error);
      message.error("Error saving user to Firestore: " + error.message);
    }
  };

  // Handle when a user is selected from the dropdown
  const handleSelectChange = (value) => {
    setSelectedUser(value);
    saveUserToFirestore(value); // Save to Firestore
  };

  return (
    <div style={{ padding: "20px" }}>
      
      <Counter/>
      <Card title="User Information" bordered={false} style={{ width: 400 }}>
        <Typography.Title level={4}>Select a User</Typography.Title>
        <Select
          showSearch
          style={{ width: "100%", marginBottom: "20px" }}
          placeholder="Select a user"
          onChange={handleSelectChange}
          value={selectedUser}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>

        <Divider />

        <Typography.Title level={4}>Cascader Example</Typography.Title>
        <Cascader placeholder="Search Options" style={{ width: "100%", marginBottom: "20px" }} />

        <Divider />

        <Typography.Title level={4}>Select Date & Time</Typography.Title>
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          <DatePicker renderExtraFooter={() => "Select Date"} style={{ width: "100%" }} />
          <DatePicker renderExtraFooter={() => "Select Date & Time"} showTime style={{ width: "100%" }} />
          <RangePicker renderExtraFooter={() => "Select Date Range"} style={{ width: "100%" }} />
          <RangePicker renderExtraFooter={() => "Select Date & Time Range"} showTime style={{ width: "100%" }} />
          <DatePicker renderExtraFooter={() => "Select Month"} picker="month" style={{ width: "100%" }} />
        </Space>
      </Card>
    </div>
  );
}
