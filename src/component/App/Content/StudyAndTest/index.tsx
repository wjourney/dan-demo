import * as React from 'react'
import { StudyAndTestWrapper, VideoWrapper, VideoWindow, VideoName, StyledButton } from './style'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import {TEST} from '../../../../constants/route'

const StudyAndTest: React.FC = () => {

  const [isConfirmationModalVisible, setIsConfirmationModalVisible] = React.useState(false)

  const handleAppleConfirmation = () => {
    setIsConfirmationModalVisible(true)
  }

  const handleOk = () => {
    setIsConfirmationModalVisible(false)
  }

  const handleCancel = () => {
    setIsConfirmationModalVisible(false)
  }
  
  const { confirm } = Modal

  const showConfirm = () =>{
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '本次考试共20道选择题，需要在30分钟内完成答题，答对18题即可完成本次考试',
      okText: '开始',
      cancelText: '取消',
      onOk() {
        window.location.replace(TEST)
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  return (
    <StudyAndTestWrapper>
      <VideoWrapper>
        <VideoWindow></VideoWindow>
        <VideoName>视频名称:</VideoName>
      </VideoWrapper>
      <VideoWrapper>
        <VideoWindow></VideoWindow>
        <VideoName>视频名称:</VideoName>
      </VideoWrapper>
      <VideoWrapper>
        <VideoWindow></VideoWindow>
        <VideoName>视频名称:</VideoName>
      </VideoWrapper>
      <VideoWrapper>
        <VideoWindow></VideoWindow>
        <VideoName>视频名称:</VideoName>
      </VideoWrapper>
      <StyledButton 
        type='primary' 
        onClick={showConfirm}
      >
        学习完成，提交考试</StyledButton>
      <Modal
        visible={isConfirmationModalVisible}
        onOk = {handleOk}
        onCancel = {handleCancel}
      >
      </Modal>
    </StudyAndTestWrapper>
  )
}

export default StudyAndTest