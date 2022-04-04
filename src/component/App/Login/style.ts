import styled from 'styled-components'
import { Tabs } from 'antd'

export const LoginWrapper = styled.div`
  position: fixed; ;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(224, 228, 232);
  margin-top: 10%;
`

export const FormWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 5%;
`

export const Title = styled.h1`
  margin-top: 10%;
  text-align: center;
  color: #393b3d;
  /* font-weight: 300; */
`

export const StyleTabs = styled(Tabs)`
  margin-top: 10%;
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`