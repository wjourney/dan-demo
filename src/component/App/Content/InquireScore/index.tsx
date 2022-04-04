import * as React from 'react'
import { InquireScoreWrapper } from './style'
import { Table } from 'antd'
import { NoTestedWrapper, Note, TestedWrapper, StyledButton, ResultTitle, StyledTable } from './style'
import { CONTENT } from '../../../../constants/route'

// enum type = {
//   true| false
// }
const hasTested = true

const data = [
  {
    name: '初级证',
    date: '22/3/11',
    result: '通过',
    number: '301928374'
  }
]
const columns = [
  {
    title: '考试名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: '结果',
    dataIndex: 'result',
    key: 'result'
  },
  {
    title: '物流单号',
    dataIndex: 'number',
    key: 'number',
  }
]



const InquireScore: React.FC = () => {

  const handleGoBack = () => {
    window.location.replace(`${CONTENT}`)
  }

  const NoTested = () => {
    return (
      <NoTestedWrapper>
        <Note>
          您尚未参加考试，请参加考试查询成绩!
        </Note>
        <StyledButton type='primary'>学习完成，提交考试</StyledButton>
      </NoTestedWrapper>
    )
  }
  
  const Tested = () => {
    return (
      <TestedWrapper>
        <ResultTitle>
          历史考试成绩
        </ResultTitle>
        <StyledTable
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered={false}
        />
        <StyledButton type='primary' onClick={handleGoBack}>返回上一页</StyledButton>
      </TestedWrapper>
    )
  }

  return (
    <InquireScoreWrapper>
      {
        hasTested === true ? <Tested/> : <NoTested/>
      }
    </InquireScoreWrapper>
  )
}

export default InquireScore