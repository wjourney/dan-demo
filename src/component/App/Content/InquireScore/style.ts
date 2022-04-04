import styled from 'styled-components'
import { Button, Table } from 'antd'

export const InquireScoreWrapper = styled.div`
  display: flex;
  flex-direction: column
  width: 100%;
  height: 100%;
`
export const NoTestedWrapper = styled.div`
  padding: 0 10% ;
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Note = styled.h1`
  width: 100%;
  display: flex;
  margin-top: 40%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

export const StyledButton = styled(Button)`
  margin-top: 70%;
  width: 50%;
  height: 50%;
  text-align: center;
`

export const TestedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// TODO wenwen
export const ResultTitle = styled.div`
  margin-top: 30%;
  height: 50%;
  align-items: center;
  font-size: 1.5rem;
`
export const StyledTable = styled(Table)`
  margin-top: 30%;
`