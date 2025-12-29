import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ProfileBox, BtnList, ChatBox, ChatModal, ModalContainer } from '..'
import { FaSearch } from 'react-icons/fa'

export default function Nav() {
  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.auth)
  const [chatOpen, setChatOpen] = useState(false)

  const navButtonClickHandler = (param) => {
    navigate(`/${param}`)
  }

  const btnListDataArr = [
    {
      icon: <FaSearch className="icon" size="24" />,
      context: 'Management',
      onClickFn: () => navButtonClickHandler('management'),
    },
    {
      icon: <FaSearch className="icon" size="24" />,
      context: 'Chart',
      onClickFn: () => navButtonClickHandler('chart'),
    },
    {
      icon: <FaSearch className="icon" size="24" />,
      context: 'Account',
      onClickFn: () => navButtonClickHandler('account'),
    },
  ]

  if (userInfo.type === 'trainer' || userInfo.type === 'admin') {
    btnListDataArr.push({
      icon: <FaSearch className="icon" size="24" />,
      context: 'Member',
      onClickFn: () => navButtonClickHandler('member'),
    })
  }

  const ChatModalOpenHandler = () => {
    setChatOpen(!chatOpen)
  }

  return (
    <NavContainer>
      <NavFrame>
        <BtnFrame>
          <Logo onClick={() => navButtonClickHandler('management')} />
          <ChatBox clickFn={ChatModalOpenHandler} />
          {chatOpen && (
            <ModalContainer onClickFn={ChatModalOpenHandler}>
              <ChatModal />
            </ModalContainer>
          )}
          <BtnList btnListDataArr={btnListDataArr} />
        </BtnFrame>
        <ProfileBox userInfo={userInfo} />
      </NavFrame>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  width: 15rem;
`

const NavFrame = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`

const Logo = styled.div`
  width: 12rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: black;
  cursor: pointer;
`

const BtnFrame = styled.div``
