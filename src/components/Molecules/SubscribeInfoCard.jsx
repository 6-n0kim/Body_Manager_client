import styled from 'styled-components'

export default function SubscribeInfoCard({ title, data }) {
  return (
    <SubscribeInfoCardContainer>
      <div>{title}</div>
      <div>{data}</div>
    </SubscribeInfoCardContainer>
  )
}

const SubscribeInfoCardContainer = styled.div``
