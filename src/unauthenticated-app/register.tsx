import React from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input } from "antd";

export const RegisterScreen = () => {
  const {register} = useAuth()
  const handleSubmit = (values: {username: string, password: string}) => {
    register( values);
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
        <Button type={'primary'} htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
    );
}
