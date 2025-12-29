import styled from 'styled-components'

import { Profile } from '..'

export default function ProfileBox({
  userInfo = { profile: '', name: '', type: '' },
}) {
  return (
    <ProfileContainer>
      <Profile srcUrl={userInfo.profile} />
      <UserInfoFrame>
        <UserName>{userInfo.name}</UserName>
        <UserType>{userInfo.type}</UserType>
      </UserInfoFrame>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

const UserInfoFrame = styled.div`
  margin-left: 0.5rem;
`

const UserName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`

const UserType = styled.p`
  color: gray;
`
