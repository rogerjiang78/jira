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
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(event) => {
            setParam({
              ...param,
              name: event.target.value,
            });
          }}
        />
        <select
          value={param.personId}
          onChange={(event) => {
            setParam({
              ...param,
              personId: event.target.value,
            });
          }}
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
