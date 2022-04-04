import styled from "styled-components"
import { Button } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100%; */
`

export const Title = styled.h1`
  width: 100%;
  margin-top: 30%;
  padding-left: 10% ;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Item = styled.div`
  margin-top: 8%;
  font-size: 1rem;
  /* width: 10%; */
`

export const StyledButton = styled(Button)`
  margin-top: 40px;
`