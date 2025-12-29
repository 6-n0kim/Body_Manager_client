import styled from 'styled-components'

export default function PasswordSearch() {
  return (
    <PasswordSearchContainer>
      <div>email</div>
      <div>code</div>
      <div>password</div>
    </PasswordSearchContainer>
  )
}

const PasswordSearchContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`
