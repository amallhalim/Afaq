import React, { useState } from "react";
import { Cascader, Select, message } from "antd";
import { Option } from "antd/es/mentions";
import { db } from "../../configuration/firebase"; // Import your Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

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
      console.log("🚀 ~ saveUserToFirestore ~ error:", error)
      message.error("Error saving user to Firestore: " + error.message);
    }
  };

  // Handle when a user is selected from the dropdown
  const handleSelectChange = (value) => {
    setSelectedUser(value);
    saveUserToFirestore(value); // Save to Firestore
  };

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a user"
        onChange={handleSelectChange}
        value={selectedUser}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>

      <Cascader placeholder="Search" placement="bottomLeft" />
    </div>
  );
}
