import styled from 'styled-components'

import { ToggleBtn } from '..'

export default function AccountToggle({ toggleHandler = () => {} }) {
  return (
    <AccountToggleContainer>
      <ToggleBtn onClickFn={() => toggleHandler(0)}>membership</ToggleBtn>
      <ToggleBtn onClickFn={() => toggleHandler(1)}>purchaseHistory</ToggleBtn>
    </AccountToggleContainer>
  )
}

const AccountToggleContainer = styled.ul``
