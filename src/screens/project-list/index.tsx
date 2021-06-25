import React, { useState, useEffect } from "react";
// import qs from "querystring";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject, useMount, useDebounce } from "../../utils";
import { useHttp } from "utils/http";

// const apiUrl = process.env.REACT_APP_API_URL;

export default function ProjectListScreen() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  let debounceParam = useDebounce(param, 500);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then((list) => setList(list));
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(
    //   async (response) => {
    //     if (response.ok) {
    //       setList(await response.json());
    //     }
    //   }
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
    // fetch(`${apiUrl}/users`).then(
    // async (response) => {
    //   if (response.ok) {
    //    setUsers(await response.json());
    //   }
    // });
  });
  return (
    <div>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
}
