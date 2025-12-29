import styled from 'styled-components'

import { NoChatYet, ChatActive } from '..'

export default function ChatBox({ trainerInfo = {}, clickFn = () => {} }) {
  trainerInfo = { srcUrl: '', name: '김헬창', type: 'trainer' }

  const isChat = Object.keys(trainerInfo).length !== 0
  const chatBox = isChat ? (
    <ChatActive trainerInfo={trainerInfo} />
  ) : (
    <NoChatYet />
  )
  return <ChatBoxContainer onClick={clickFn}>{chatBox}</ChatBoxContainer>
}

const ChatBoxContainer = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  border-radius: 1rem;
  margin: 2rem 0 1rem;
  padding: 1rem;
  background-color: #dde2f3;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
`

// 채팅한적이 없고, PT중이 아닌 경우 + 버튼과 함께 채팅을 만들어 보라는 맨트
// 채팅을 한적이 있거나, PT을 신청해서 담당쌤이 있을 경우 그 선생님이랑 매칭.
