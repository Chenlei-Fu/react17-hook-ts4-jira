### Jira Clone

React 17 + React Hook + TypeScript

### Development Timeline

02/27 - Basic Configuration & Json Server
tsconfig.json -> add baseUrl in compiler Options
Install and config Prettier
Add commitLink
Finish Json server configuration

- For project list
  - State initialization
  - Lifting State Up

02/28
Add two custom hooks: useMount and useDebounce
JS -> TS

03/02
install dev tools
generic features for deBounce
JWT and auth-provider

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
