import styled from 'styled-components'
import { Button } from 'antd'

export const StudyAndTestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 10%;
  height: 100%;
  width: 100%;
`
// TODO: wenwen 出现px这里
export const VideoWrapper = styled.div`
  min-width: 80%;
  min-height: 40%;
  height: 200px ;
  margin: 10% 0;
`

export const VideoWindow = styled.div`
  width: 100%;
  height: 90%;
  border: 1px solid;
`

export const VideoName = styled.div`
  font-size: 1rem;
`
// TODO: wenwen 出现px这里
export const StyledButton= styled(Button)`
  margin-bottom: 20px ;
`