import { Table } from "antd";
import dayjs from "dayjs";
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
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "部门",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "负责人",
      key: "id",
      render(project: Project) {
        return (
          <span>{users.find((user: User) => user.id === project.personId)?.name || "未知"}</span>
        );
      },
    },
    {
      title: "创建时间",
      render(project: Project) {
        return <span>{project.created ? dayjs(project.created).format("YYYY-MM-DD") : "无"}</span>;
      },
    },
  ];
  return <Table rowKey={"id"} pagination={false} columns={columns} dataSource={list} />;
}
