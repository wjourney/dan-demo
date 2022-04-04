import * as React from 'react'
import { Form, Tabs, Button } from 'antd'
import { LoginWrapper, FormWrapper, Title, StyleTabs } from './style'
import { VerticalDivider } from '../../common-styles/divider'
import LoginWithPassword from './LoginWithPassword'
import LoginWithSMS from './LoginWithSMS'
import 'antd/dist/antd.css'
import { SIGN_UP, CONTENT }  from '../../../constants/route'

const { TabPane } = Tabs
const Login: React.FC = () => {

  const handleToSignUp = () => {
    window.location.replace(`${SIGN_UP}`)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
    window.location.replace(`${CONTENT}`)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <LoginWrapper>
      <FormWrapper>
        <Title>用户登陆</Title>
        <StyleTabs defaultActiveKey='LoginWithPassword'>
          <TabPane tab='密码登陆' key='LoginWithPassword'>
            <LoginWithPassword onFinish={onFinish} onFinishFailed={onFinishFailed}/>
          </TabPane>
          <TabPane tab='短信登录' key='LoginWithSMS'>
            <LoginWithSMS onFinish={onFinish} onFinishFailed={onFinishFailed}/>
          </TabPane>
        </StyleTabs>
        <div >
        没有账号?<Button type='link' onClick={handleToSignUp}>立即注册</Button>
      </div>
      </FormWrapper>
      
    </LoginWrapper>
  )
}

export default Login