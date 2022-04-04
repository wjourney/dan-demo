import styled from 'styled-components'
import { Button } from 'antd'
import pic from '../../../assets/images/Cybersecurity.jpeg'

export const FrontPageWrapper = styled.div`
  position: fixed;
  display: flex;
  background-image: url(${pic});
  width:100%;
  height: 100%; 
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
`

export const Title = styled.h1`
  font-size: 2rem; 
  margin-top: 20%;
  text-align: center;
  color: white;
  margin-top: 40%;
`

export const TexWrapper = styled.div`
  max-width: calc(var(--bili) * 80);
  font-size: 1rem;
  color: #FFDAB9 ;
  text-align: center;
  margin-top: 95%;
`

export const ButtonWrapper = styled.div`
  width: 50%;
  height: 40% ;
  display: flex;
  flex-direction: row;
  margin-top: 10%;
`

export const StyledButton = styled(Button)`
  width: 80%;
  height: 40% ;
`