### Jira Clone

React 17 + React Hook + TypeScript

### Styling

AntDesign
Emotion: CSS in JS
FlexBox, Grid System

### Knowledge

#### How to mock data?

1. mock.js
   advantages:

- Separate the front-end and back-end
- Generate random variables

disadvantages:

- Fake data
- Only support ajax, not support fetch

2. 接口管理工具 (rap, swagger, moco, yapi)
   配置复杂，依赖后端

3. Local Json-server
   Best one

#### REST API

URL represents resources/object, method represents behavior

```$xslt
GET /tickets //列表
GET /tickets/12 //详情
POST /tickets //增加
PUT /tickets/12 替换
PATCH /tickets/12 修改
DELETE /tickets/12 删除
```

#### Utility Type and Type alias

```typescript
type FavoriteNumber = string | number;
let roseFavoriteNumber: FavoriteNumber = "6";
```

类型别名在很多情况下能和 interface 互换
主要区别:

1. Interface cannot replace type
2. Interface cannot replace utility type (parameter 就是类型别名)
   **JS 中的 typeof 是在 runtime 运行的，TS 中的是在静态环境中运行的**

Most commonly used utility type:

```typescript
type Person = {
  name: string;
  age: number;
};
const Xiaoming: Partial<Person> = {};
const shenMiRen: Omit<Person, "name"> = { age: 8 };

type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### Highlight

Custom Hooks
Custom antd library (Craco)
