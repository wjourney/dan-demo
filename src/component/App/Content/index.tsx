import * as React from 'react'
import { Wrapper, StyledButton } from './style'
import { Form, Checkbox, Input, Button } from 'antd'
import { APPLY, STUDY_AND_TEST, INQUIRE_SCORE } from '../../../constants/route'
import { Outlet } from 'react-router-dom'

const Content: React.FC = () => {
  const handleToApply = () => {
    window.location.replace(`${APPLY}`)
  }

  const handleToStudyAndTest = () => {
    window.location.replace(`${STUDY_AND_TEST}`)
  }

  const handleToInquireScore = () => {
    window.location.replace(`${INQUIRE_SCORE}`)
  }
  
  return (
    <Wrapper>
      <StyledButton block type='primary' onClick={handleToApply}>
        网络安全师报名
      </StyledButton>
      <StyledButton block type='primary' onClick={handleToStudyAndTest}>
        学习与考试
      </StyledButton>
      <StyledButton block type='primary' onClick={handleToInquireScore}>
        考试成绩查询
      </StyledButton>
    </Wrapper>
  )
}

export default Content