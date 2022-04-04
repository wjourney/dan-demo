import * as React from 'react'
import { Form, Checkbox, Input, Button } from 'antd'

interface ILoginWithPasswordProps {
  onFinish: (values: string) => void
  onFinishFailed: (errorInfo: any) => void
}

const LoginWithPassword: React.FC<ILoginWithPasswordProps> = ({ onFinish, onFinishFailed }) => {
  const [form] = Form.useForm()

  return (
    <Form
      name='basic'
      form={form}
      labelCol={{ span: 5 }}
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
        <Input placeholder='登录用户名/邮箱'/>
      </Form.Item>

      <Form.Item
        label='密码'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='密码'/>
      </Form.Item>

      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type='primary' htmlType='submit' >
          登陆
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginWithPassword