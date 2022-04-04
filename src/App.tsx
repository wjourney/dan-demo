import * as React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
// import 'antd/dist/antd.less'
import AppIndex from './component/App'


const App: React.FC = () => (
  <RecoilRoot>
    <BrowserRouter>
      <ConfigProvider>
        <AppIndex />
      </ConfigProvider>
    </BrowserRouter>
  </RecoilRoot>
)

export default App
