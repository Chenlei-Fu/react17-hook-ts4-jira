import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from 'antd';
export const LoginScreen = () => {
  const {login} = useAuth()

  const handleSubmit = (values: {username: string, password: string}) => {
    login( values);
  };
  return (
    <Form onFinish={handleSubmit}>
    <Form.Item
      name={'username'}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder={'username'} type="text" id={'username'}/>
    </Form.Item>
    <Form.Item
      name={'password'}
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input placeholder={'password'} type="password" id={'password'} />
    </Form.Item>
    <Form.Item>
      <Button type={'primary'} htmlType="submit">Login</Button>
    </Form.Item>
  </Form>
  );
};
