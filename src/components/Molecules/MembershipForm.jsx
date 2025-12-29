import styled from 'styled-components'
import { useState } from 'react'

export default function MembershipForm({
  priceInfo = {
    price: [],
    pt: [],
  },
  selectClickFn = () => {},
  submitClickFn = () => {},
}) {
  const [toggle, setToggle] = useState(true)

  const membership = (
    <div>
      <p>이용권</p>
      <select onChange={(e) => selectClickFn(e.target.value)}>
        {priceInfo.price.map((el, idx) => (
          <option value={el.price_id} key={idx}>
            <span>{el.price_name}</span>
            <span>{el.price_info}</span>
          </option>
        ))}
      </select>
    </div>
  )

  const pt = (
    <div>
      <p>pt</p>
      <select onChange={(e) => selectClickFn(e.target.value)}>
        {priceInfo.pt &&
          priceInfo.pt.map((el, idx) => (
            <option value={el.pt_id} key={idx}>
              <span>{el.trainer_name}</span>
              <span>{el.pt_price}</span>
            </option>
          ))}
      </select>
    </div>
  )

  const toggleHanlder = () => {
    setToggle(!toggle)
  }

  return (
    <MembershipFormContainer>
      <button onClick={toggleHanlder}>toggleBtn</button>
      {toggle ? membership : pt}
      <div>
        <p>운동복</p>
        <input type="checkbox" />
        <input type="number" />달
      </div>
      <div>
        <p>캐비넷</p>
        <input type="checkbox" />
        <input type="number" />달
      </div>
      <button onClick={submitClickFn}>구매</button>
    </MembershipFormContainer>
  )
}

const MembershipFormContainer = styled.div``

// 이용권 구매
//  - 이용권 항목에서 선택
// 운동복 빌림 여부
//  - 체크박스 선택, 기간 선택
// 캐비넷 구매 여부
//  - 체크박스 선택, 기간 선택.
