import React, { ReactNode, useContext, useState } from "react";
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";
import * as Auth from "../utils/auth-provider";

export const bootstrapUser = async () => {
  let user = null;
  const token = Auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};
interface AuthForm {
  username: string;
  password: string;
}
const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => Auth.login(form).then((user) => setUser(user));
  const register = (form: AuthForm) => Auth.register(form).then((user) => setUser(user));
  const logout = () => Auth.logout().then(() => setUser(null));

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth需要在 AuthProvider中使用");
  }
  return context;
};
