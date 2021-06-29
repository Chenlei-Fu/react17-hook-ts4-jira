import { User } from "./search-panel";
import {Table} from 'antd'
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  users: User[],
  list: Project[]
}

export const List = ({ users, list }: ListProps) => {
  return <Table pagination={false} columns={[{
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  }, {
    title: 'Assignee',
    render(value, project){
      return <span>
        {users.find((user) => user.id === project.personId)?.name ||
        "UnKnown"}
      </span>
    }
  }]} dataSource={list}/>;
};
