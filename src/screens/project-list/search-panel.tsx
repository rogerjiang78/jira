/** @jsxImportSource @emotion/react */
import { Form, Input, Select } from "antd";

import React from "react";

const { Item } = Form;
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

export interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export default function SearchPanel({ param, setParam, users }: SearchPanelProps) {
  return (
    <Form layout={"inline"} css={{ marginBottom: "1rem" }}>
      <Item>
        <Input
          type="text"
          value={param.name}
          placeholder="项目名"
          onChange={(event) => {
            setParam({
              ...param,
              name: event.target.value,
            });
          }}
        />
      </Item>
      <Item>
        <Select
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Item>
    </Form>
  );
}
