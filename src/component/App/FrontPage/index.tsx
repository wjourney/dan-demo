import * as React from 'react'
import { FrontPageWrapper, Title, TexWrapper, ButtonWrapper, StyledButton } from './style'
import { InstructionsWord } from '../../../constants/word'
import { LOGIN, SIGN_UP } from '../../../constants/route'
import { HorizontalDivider } from '../../common-styles/divider'

const FrontPage: React.FC = () => {
  const handleLogin = () => {
    window.location.replace(LOGIN)
  }

  const handleSignUp = () => {
    window.location.replace(SIGN_UP)
  }
  return (
    <div>
      <FrontPageWrapper>
        <Title>
          网络信息直播安全师
        </Title>
        <TexWrapper>
          {InstructionsWord}
        </TexWrapper>
        <ButtonWrapper>
          <StyledButton type='primary' onClick={handleLogin}>登陆</StyledButton>
          <HorizontalDivider size='40px'/>
          <StyledButton type='primary' onClick={handleSignUp}>注册</StyledButton>
        </ButtonWrapper>
      </FrontPageWrapper>
      <div>
            dddd
          </div>
    </div>
  )
}
export default FrontPage