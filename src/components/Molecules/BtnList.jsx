import styled from 'styled-components'

import { IconBtn } from '..'

export default function BtnList({ btnListDataArr = [] }) {
  return (
    <BtnListContainer>
      {btnListDataArr.map((el, idx) => (
        <li key={idx + el.context}>
          <IconBtn onClickFn={el.onClickFn} context={el.context}>
            {el.icon}
          </IconBtn>
        </li>
      ))}
    </BtnListContainer>
  )
}

const BtnListContainer = styled.ul``
