import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

// const apiUrl = process.env.REACT_APP_API_URL;

export default function RegisterScreen() {
  const { register } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户</label>
        <input placeholder="用户名" type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input placeholder="密码" type="password" id="password" />
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
    </form>
  );
}
