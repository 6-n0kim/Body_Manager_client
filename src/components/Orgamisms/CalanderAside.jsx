import styled from 'styled-components'

import { MainCalander } from '..'

export default function CalanderAside() {
  return (
    <CalanderAsideContainer>
      <MainCalander />
      <Illustration src="" alt="exercise" />
    </CalanderAsideContainer>
  )
}

const CalanderAsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 2rem 0;
  background-color: salmon;
`
const Illustration = styled.img`
  background-color: black;
`
