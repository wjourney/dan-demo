import * as React from 'react'
import { TestWrapper, TimeNote, QuestionWrapper, QuestionTitle, QuestionContent, StyledButton } from './style'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { CONTENT } from '../../../../../constants/route'

const Test: React.FC = () => {
  const { confirm } = Modal

  const showConfirm = () =>{
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '是否确认提交答卷',
      okText: '提交',
      cancelText: '返回',
      onOk() {
        window.location.replace(CONTENT)
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  return (
    <TestWrapper>
      <TimeNote>考试结束:  25min</TimeNote>
      <QuestionWrapper>
        <QuestionTitle>题目一</QuestionTitle>
        <QuestionContent>题目内容</QuestionContent>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionTitle>题目一</QuestionTitle>
        <QuestionContent>题目内容</QuestionContent>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionTitle>题目一</QuestionTitle>
        <QuestionContent>题目内容</QuestionContent>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionTitle>题目一</QuestionTitle>
        <QuestionContent>题目内容</QuestionContent>
      </QuestionWrapper>
      <StyledButton type='primary' onClick={showConfirm}>提交答案</StyledButton>
    </TestWrapper>
  )
}

export default Test