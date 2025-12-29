import styled from 'styled-components'

export default function MenuBtn({ context = '' }) {
  return <MenuBtnContainer>{context}</MenuBtnContainer>
}

const MenuBtnContainer = styled.button`
  flex-shrink: 0;
  width: 13rem;
  height: 15rem;
  font-family: 'Do Hyeon', sans-serif;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;
`
