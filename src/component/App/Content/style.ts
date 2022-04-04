import styled from 'styled-components'
import { Button } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20%;
`

export const StyledButton = styled(Button)`
  margin-top: 10%;
  width: 70%;
  height: 30%;
  text-align: center;
  font-size: 2rem;
`