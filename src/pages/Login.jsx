import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginSkeleton } from '../components'

export default function Login() {
  const location = useLocation()
  const navigation = useNavigate()
  const isAuth = useSelector((state) => state.auth.isAuthentication)
  const path = location.pathname

  useEffect(() => {
    if (isAuth && path !== '/') navigation('/management', { replace: true })
  }, [isAuth, navigation, path])

  return <LoginSkeleton />
}
