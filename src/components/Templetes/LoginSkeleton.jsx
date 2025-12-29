import styled from 'styled-components'

import { Introduce, LoginForm } from '..'

export default function LoginSkeleton() {
  return (
    <LoginSkeletonContainer>
      <Introduce />
      <LoginForm />
    </LoginSkeletonContainer>
  )
}

const LoginSkeletonContainer = styled.div`
  display: flex;
  width: 100vw;
`
