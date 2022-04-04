import React, { useState } from 'react'
import { Form, Checkbox, Input, Button } from 'antd'

const formLayout = {
  wrapperCol: { span: 24 },
}

interface ILoginWithSMSProps {
  onFinish: (values: string) => void
  onFinishFailed: (errorInfo: any) => void
}

const LoginWithSMS: React.FC<ILoginWithSMSProps> = ({ onFinish, onFinishFailed }) => {
  const [time, setTime] = useState(60)
  const [isShowCode, setIsShowCode] = useState<boolean>(false)
  const [form] = Form.useForm()

  // 发送邮箱验证码
  const sendEmail = async() => {
    const fileds = await form.validateFields(['account', 'email'])
    console.log(11, fileds)
    if (isShowCode) { // 倒计时未结束,不能重复点击
      return
    }
    setIsShowCode(true)
    // 倒计时
    const active = setInterval(() => {
      setTime((preSecond) => {
        if (preSecond <= 1) {
          setIsShowCode(false)
          clearInterval(active)
          return 60
        }
        return preSecond - 1
      })
    }, 1000)
  }

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
        label='手机号'
        name='telephoneNumber'
        rules={[{ required: true, message: '请输入手机号！' }]}
      >
        <Input placeholder='手机号' maxLength={50} />
      </Form.Item>
      <Form.Item
        label='验证码'
        name='verificationCode'
        rules={[
          { required: true, message: '请输入手机验证码！' },
        ]}
      >
        <Input
          placeholder='验证码'
          maxLength={6}
          suffix={<a onClick={() => sendEmail()}>
            {isShowCode ? `${time}秒后重新发送` : '发送验证码'}
          </a>}
        />
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

export default LoginWithSMS