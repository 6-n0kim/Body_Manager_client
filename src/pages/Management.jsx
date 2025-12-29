import { Outlet } from 'react-router-dom'
import { ManagementSkeleton } from '../components'

export default function Management() {
  return (
    <ManagementSkeleton>
      <Outlet />
    </ManagementSkeleton>
  )
}
