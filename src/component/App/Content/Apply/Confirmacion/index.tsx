import * as React from 'react'
import { Form, Checkbox, Input, Button, Modal } from 'antd'
import { Wrapper, StyledDiv } from './style'
interface IConfirmationProps {
  formValues: any
}

const Confirmation: React.FC<IConfirmationProps> = ({formValues}) => {
  const [form] = Form.useForm()
  console.log(formValues)

  React.useEffect(() => {
    form.setFieldsValue(formValues);
  }, [form])

  return (
    <Wrapper>
     <Item>
        姓名
     </Item>

    </Wrapper>
  )
}

export default Confirmation