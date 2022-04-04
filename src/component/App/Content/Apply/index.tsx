import * as React from 'react'
import { Form, Checkbox, Input, Button, Modal } from 'antd'
import { ContentWrapper, Title } from './style'
import Confirmation from './Confirmacion'
import { CONTENT, ORDER_CONFIRM } from '../../../../constants/route'

const Apply: React.FC = () => {

  const [isConfirmationModalVisible, setIsConfirmationModalVisible] = React.useState(false)
  const [formValues, setFormValues] = React.useState()

  const [form] = Form.useForm()

  const onFinish = () => {
    setIsConfirmationModalVisible(true)
    const values = form.getFieldsValue()
    setFormValues(values)
  }

  const onFinishFailed = () => {
    console.log('fff')
  }

  const handleOk = () => {
    setIsConfirmationModalVisible(false)
    window.location.replace(ORDER_CONFIRM)
  }

  const handleCancel = () => {
    setIsConfirmationModalVisible(false)
  }

  return (
    <ContentWrapper>
      <Title>网络安全师报名</Title>
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
          label='姓名'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='姓名'/>
        </Form.Item>

        <Form.Item
          label='身份证'
          name='idCard'
          rules={[{ required: true, message: 'Please input your idCard!' }]}
        >
          <Input placeholder='身份证号码'/>
        </Form.Item>

        <Form.Item
          label='手机号'
          name='phoneNumber'
          rules={[{ required: true, message: 'Please input your phoneNumber!' }]}
        >
          <Input placeholder='手机号'/>
        </Form.Item>

        <Form.Item
          label='地址'
          name='address'
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input placeholder='地址'/>
        </Form.Item>

        <Form.Item
          label='职业'
          name='job'
          rules={[{ required: true, message: 'Please input your job!' }]}
        >
          <Input placeholder='手机号'/>
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>请填写准确的资料信息，一旦报名成功将不可修改</Checkbox>
        </Form.Item>

        <Form.Item >
          <Button type='primary' htmlType='submit'>
            提交报名信息
          </Button>
        </Form.Item>
      </Form>
      <Modal
        visible = {isConfirmationModalVisible}
        onOk={handleOk} 
        onCancel={handleCancel}
        okText='确认提交'
        cancelText='返回修改'
      >
        <Confirmation formValues={formValues}/>
      </Modal>
    </ContentWrapper>

  )
}

export default Apply