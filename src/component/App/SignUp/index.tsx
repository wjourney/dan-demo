import * as React from 'react'
import { SignUpWrapper, StyledDiv, Title } from './style'
import { Form, Input, Button } from 'antd'
import { LOGIN } from '../../../constants/route'
 
const SignUp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  const handleToLogin = () => {
    window.location.replace(LOGIN)
  }

  return (
    <SignUpWrapper>
      <Title>用户注册</Title>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='用户名'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='密码'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' onClick={handleToLogin}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </SignUpWrapper>
  )
}

export default SignUp