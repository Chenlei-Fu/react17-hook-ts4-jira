import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param, 500);
  const client = useHttp();

  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) })
      .then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client('users')
      .then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

