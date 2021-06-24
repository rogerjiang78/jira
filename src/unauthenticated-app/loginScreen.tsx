import { useAuth } from "context/auth-context";
import React from "react";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";

const { Item } = Form;

export default function LoginScreen() {
  const { user, login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登入成功, 用户名: {user.name}</div> : null}
      <Item name={"username"} rules={[{ required: true, message: "请输入用户名" }]}>
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Item>
      <Item name={"password"} rules={[{ required: true, message: "请输入密码" }]}>
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Item>
      <Item>
        <LongButton htmlType={"submit"} type={"primary"}>
          登录
        </LongButton>
      </Item>
    </Form>
  );
}
