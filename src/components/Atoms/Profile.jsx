import styled from 'styled-components'

export default function Profile({ srcUrl }) {
  return (
    <ProfileFrame>
      <ProfileImg src={srcUrl} alt="프로필 사진" />
    </ProfileFrame>
  )
}

const ProfileFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  overflow: hidden;
  background-color: black;
`

const ProfileImg = styled.img`
  width: auto;
  height: 4rem;
`
