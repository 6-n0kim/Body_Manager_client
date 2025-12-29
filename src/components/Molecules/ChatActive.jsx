import styled from 'styled-components'

import { ProfileBox } from '..'

export default function ChatActive({
  trainerInfo = { srcUrl: '', name: '', type: '' },
}) {
  return (
    <ChatActiveContainer>
      <ProfileBox userInfo={trainerInfo} />
    </ChatActiveContainer>
  )
}

const ChatActiveContainer = styled.div``
