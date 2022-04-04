import styled from "styled-components";
import { Button } from 'antd'

export const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
// TODO
export const TimeNote = styled.h1`
  display: flex;
  margin-top: 10%;
  height: 20%;
  width: 40%;
  align-items: center;
  justify-content: center;: ;
  background-color: #00BFFF;
  font-size: 1rem;
`

export const QuestionWrapper = styled.div`
  margin-top: 10%;
  width: 90%;
  height: 200px;
  border: 1px solid;
`

export const QuestionTitle = styled.div`

`

export const QuestionContent = styled.div`
  width: 50%;
  height: 50%;
`

// TODO: wenwen 出现px这里
export const StyledButton= styled(Button)`
  margin-top: 20px;
  margin-bottom: 20px;
`