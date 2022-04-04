import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import FrontPage from './FrontPage'
import SignUp from './SignUp'
import Content from './Content'
import Apply from '../App/Content/Apply'
import StudyAndTest from '../App/Content/StudyAndTest'
import InquireScore from '../App/Content/InquireScore'
import Test from '../App/Content/StudyAndTest/Test'
import OrderConfirm  from '../App/Content/Apply/OrderConfirm'
import { LOGIN, SIGN_UP, ROOT, CONTENT, APPLY, STUDY_AND_TEST, INQUIRE_SCORE, TEST, ORDER_CONFIRM} from '../../constants/route'

export default () => (
  <Routes>
    <Route path={ROOT} element={<FrontPage />} />
    <Route path={LOGIN} element={<Login />} />
    <Route path={SIGN_UP} element={<SignUp />} />
    <Route path={CONTENT} element={<Content />}/>
    <Route path={APPLY} element={<Apply/>}/>
    <Route path={STUDY_AND_TEST} element={<StudyAndTest/>}/>
    <Route path={INQUIRE_SCORE} element={<InquireScore/>}/>
    <Route path={TEST} element={<Test/>}/>
    <Route path={ORDER_CONFIRM} element={<OrderConfirm/>}/>
  </Routes>
)