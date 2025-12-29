import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Nav } from './components'
import { Login, SignUp, Management, Chart, Account } from './pages'
import {
  MainDefault,
  Attendance,
  Diet,
  ExercisePlan,
  InbodyResister,
} from './components'

export default function Router() {
  const location = useLocation()
  const navigation = useNavigate()
  const isAuthentication = useSelector((state) => state.auth.isAuthentication)
  const pathname = location.pathname

  // 로그인이 되어있지 않다면 로그인 페이지로 이동시킴
  useEffect(() => {
    if (!isAuthentication && pathname !== '/' && pathname !== '/signup') {
      navigation('/', { replace: true })
    }
  }, [isAuthentication, navigation, pathname])

  return (
    <RouterContainer>
      {location.pathname !== '/' && location.pathname !== '/signup' && <Nav />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="management" element={<Management />}>
          <Route path="" element={<MainDefault />} />
          <Route path="diet" element={<Diet />} />
          <Route path="inbodyresister" element={<InbodyResister />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="exerciseplan" element={<ExercisePlan />} />
        </Route>
        <Route path="chart" element={<Chart />} />
        <Route path="account" element={<Account />} />
        <Route path="member" element={<div>Member</div>} />
      </Routes>
    </RouterContainer>
  )
}

const RouterContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`
