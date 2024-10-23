import {Cascader, Select} from "antd";
import {Option} from "antd/es/mentions";
import React from "react";

export default function Home() {
  return (
    <div>
      <Select showSearch style={{width: 200}}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Cascader placeholder="Search" placement="bottomLeft" />
    </div>
  );
}
