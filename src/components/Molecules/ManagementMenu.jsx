import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { MenuBtn } from '..'

export default function ManagementMenu() {
  const navigate = useNavigate()

  const btnListArr = [
    { context: '출결 관리', pathname: 'attendance' },
    { context: '운동 일정', pathname: 'exerciseplan' },
    { context: '식단 등록', pathname: 'diet' },
    { context: '인바디 등록 / 수정', pathname: 'inbodyresister' },
  ]

  const moveHanlder = (pathname) => {
    navigate(pathname)
  }

  return (
    <ManagementMenuContainer>
      <MenuTitle>MENU</MenuTitle>
      <MenuBtnList>
        {btnListArr.map((el) => (
          <li onClick={() => moveHanlder(el.pathname)} key={el.pathname}>
            <MenuBtn context={el.context} />
          </li>
        ))}
      </MenuBtnList>
    </ManagementMenuContainer>
  )
}

const ManagementMenuContainer = styled.header`
  height: 40%;
  background-color: yellow;
  padding: 0 1rem;
`

const MenuTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Carter One', cursive;
`

const MenuBtnList = styled.ul`
  display: flex;
  width: 100%;
  overflow: scroll;
`
