import styled from 'styled-components'

import { CalanderAside, ManagementMain } from '..'

export default function ManagementSkeleton({ children }) {
  return (
    <ManagementSkeletonContainer>
      <ManagementMain>{children}</ManagementMain>
      <CalanderAside />
    </ManagementSkeletonContainer>
  )
}

const ManagementSkeletonContainer = styled.main`
  display: flex;
  width: 100vw;
  overflow: hidden;
`
