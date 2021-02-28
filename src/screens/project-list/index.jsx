import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject } from "../../utils";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
{
  /*npm start -> .env.development npm run build-> .env */
}
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, [param]);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />{" "}
      {/*react props*/}
      <List users={users} list={list} />
    </div>
  );
};