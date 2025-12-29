import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function IconBtn({ onClickFn = () => {}, context, children }) {
  const location = useLocation()
  return (
    <IconBtnContainer
      onClick={onClickFn}
      isSelect={location.pathname.split('/')[1] === context.toLowerCase()}
    >
      {children}
      <BtnText>{context}</BtnText>
    </IconBtnContainer>
  )
}

const IconBtnContainer = styled.button`
  display: flex;
  align-items: center;
  font-size: ${({ isSelect }) => (isSelect ? '1.5rem' : '1.4rem')};
  color: ${({ isSelect }) => (isSelect ? 'black' : 'gray')};
  margin: 0.5rem 0;
`

const BtnText = styled.p`
  margin-left: 0.2rem;
`
