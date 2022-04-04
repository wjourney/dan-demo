import* as React from 'react'
import { Wrapper, Title, OrderInfo, Item } from './style'
import { Button } from 'antd'

const OrderConfirm = () => {
  return (
    <Wrapper>
      <Title>报名订单确认</Title>
      <OrderInfo>
        <Item>报名费: 500元</Item>
        <Item>培训费: 500元</Item>
        <Item>证书: 500元</Item>
        <Item>资质认证: 500元</Item>
        <Item>费用合计: 1500元</Item>
      </OrderInfo>
      <Button type='primary'>订单支付</Button>
    </Wrapper>
  )
}

export default OrderConfirm