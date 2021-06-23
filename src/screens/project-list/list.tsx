import React from "react";

interface Project {
  id: number;
  name: string;
  personId: number;
  ownerId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface User {
  id: number;
  ownerId: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface ListTypes {
  list: Project[];
  users: User[];
}

export default function List({ list, users }: ListTypes) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.personId}>
            <td>{project.name}</td>
            <td>{users.find((user) => user.id === project.id)?.name || "未知"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
