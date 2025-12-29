import styled from 'styled-components'

export default function AttendanceBtn({ children, onClickFn }) {
  return (
    <AttendanceBtnContainer onClick={onClickFn}>
      {children}
    </AttendanceBtnContainer>
  )
}

const AttendanceBtnContainer = styled.button`
  width: 3rem;
  height: 2rem;
  border: 1px solid black;
`
