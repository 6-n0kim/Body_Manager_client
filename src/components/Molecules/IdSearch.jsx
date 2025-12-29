import { useState } from 'react'
import styled from 'styled-components'

export default function IdSearch() {
  const [userInfo, setUserInfo] = useState({ name: '', phone: '' })
  const onChangeHanlder = (e, key) => {
    setUserInfo({ ...userInfo, [key]: e.target.value })
  }
  return (
    <IdSearchContainer>
      <ul>
        <li>
          <label>
            이름
            <input
              onChange={(e) => onChangeHanlder(e, 'name')}
              type="text"
              value={userInfo.name}
            />
          </label>
        </li>
        <li>
          <label>
            전화번호
            <input
              onChange={(e) => onChangeHanlder(e, 'phone')}
              type="text"
              value={userInfo.phone}
            />
          </label>
        </li>
      </ul>
    </IdSearchContainer>
  )
}

const IdSearchContainer = styled.div`
  background-color: white;
`
