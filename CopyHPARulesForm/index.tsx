import * as React from 'react'
import { Form, FormProps,  Alert, Select, Switch, Menu, Cascader, Divider, Button, Row, Col } from 'infrad'
import { StyledCascader } from 'components/App/ApplicationsManagement/ApplicationDetail/HPA/CopyHPARulesForm/style'
import { FormInstance } from 'infrad/lib/form'
import { HorizontalDivider } from 'common-styles/divider'

// TODO: wenwne.wu remove mock data
 const options = [
  {
    label: <div style={{width: '120px'}}>sg1</div>,
    value: 'sg1',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({
        label: <div style={{width: '320px'}}>{`gameplatform-usergateway-live-sg1 | ${index}`}</div>,
        value: `gameplatform-usergateway-live-sg1 | ${index}`
      })),
  },
  {
    label: <div style={{width: '120px'}}>sg2</div>,
    value: 'sg2',
    children: new Array(3)
      .fill(null)
      .map((_, index) => ({
        label: <div style={{width: '320px'}}>{`gameplatform-usergateway-live-sg2 | ${index}`}</div>,
        value: `gameplatform-usergateway-live-sg2 | ${index}`
      })),
  }
]

const allDeployment = [['sg1'], ['sg2']]
interface ICopyHPARulesFormProps {
  form: FormInstance
  onFieldsChange: (disabled: boolean) => void
}

interface ICopyRuleForm extends FormProps {}

const CopyRuleForm: React.FC<ICopyRuleForm> = props => {
  const { form, onFieldsChange, initialValues } = props

// const CopyHPARulesForm: React.FC<ICopyHPARulesFormProps> = ( {form, onFieldsChange }) => {
   //编辑页面默认要展示，所以要设置value
  const [defaultValue, setDefaultValue] = React.useState([])
  const CascaderRef = React.useRef(null)

  const displayRender = (label) => {
    console.log('333', label)
    return label[label.length - 1]
  }

  const getOptions = (values) => {
    console.log('values', values)
  }

  const handleSelectAll = () => {
    console.log('handleSelectAll')
    form.setFieldsValue({deployment: allDeployment })
  }

  const handleClearCascader = () => {
    console.log('handleClear')
    setDefaultValue([])
    form.setFieldsValue({deployment:[]})
  }

  console.log(defaultValue)
  const dropdownRender = (menus) => {
    return (
      <>
        {menus}
        <Divider style={{ margin: 0 }} />
        <Row>
          <div style={{ display: 'flex', flexDirection: 'row', whiteSpace:'nowrap' }}>
            <HorizontalDivider size=''/>
            <Button onClick={handleSelectAll}>Select All</Button>
            <Button onClick={handleClearCascader}>Clear</Button>
          </div>
          <div style={{whiteSpace:'nowrap' }}>8/130</div>
          <div style={{whiteSpace:'nowrap'}}>deployment selected</div>
        </Row>
      </>
    )
  }
  const getIsRequiredNotEmpty = (values) => {
    const { deployment, status } = values
    return deployment && status
  }

  // const handleFieldsChange = () => {
  //   const values = form.getFieldsValue()
  //   const isRequiredFieldsNotEmpty = getIsRequiredNotEmpty(values)
  //   // onFieldsChange && onFieldsChange(!isRequiredFieldsNotEmpty)
  // }

  return (
    // <Form
    //   form={form}
    //   onFieldsChange={handleFieldsChange}
    // >
     <Form
     name='rule' initialValues={initialValues} onFieldsChange={onFieldsChange} form={form}>
      <Form.Item>
        <Alert message='HPA Rules will be overwritten if exist.' type='warning' showIcon/>
      </Form.Item>
      <Form.Item
        label='Deployment'
        name='deployment'
        rules={[{ required: true, message: 'Please input select deployment!' }]}
      >
        <StyledCascader
          ref={CascaderRef}
          options={options}
          placeholder='Please select deployment'
          expandTrigger='hover'
          displayRender={displayRender}
          // style={{ width: '480px', marginRight: '24px', border: '1px solid'}}
          onChange={getOptions}
          multiple
          // maxTagCount='responsive'
          dropdownRender={dropdownRender}
          placement='bottomRight'
          // dropdownMenuColumnStyle={{ width: '10px', display: 'float', zIndex: 1001}}
          value={defaultValue}
        />
      </Form.Item>
      <Form.Item
        label='Status'
        name='status'
        valuePropName='checked'
        // rules={[{ message: 'Please input select status!' }]}
        // style={{display: 'flex', flexDirection: 'column'}}
      >
        <Switch/>
      </Form.Item>
    </Form>
  )
}

export default CopyRuleForm
