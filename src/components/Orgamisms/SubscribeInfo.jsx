import styled from 'styled-components'

import { SubscribeInfoCard } from '..'

export default function SubscribeInfo() {
  const subData = {
    end_date: '2022-11-24',
    pt_remain_count: 11,
  }
  return (
    <SubscribeInfoContainer>
      <SubscribeInfoCard title="회원권 잔여 일수" data={subData.end_date} />
      <SubscribeInfoCard title="PT 잔여 일수" data={subData.pt_remain_count} />
    </SubscribeInfoContainer>
  )
}

const SubscribeInfoContainer = styled.section``
