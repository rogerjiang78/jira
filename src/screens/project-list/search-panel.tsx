import { Form, Input, Select } from "antd";
import React from "react";

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
    <Form>
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(event) => {
            setParam({
              ...param,
              name: event.target.value,
            });
          }}
        />
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
            <Select.Option value={user.id} key={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Form>
  );
}
