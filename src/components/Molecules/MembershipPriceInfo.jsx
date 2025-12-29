import styled from 'styled-components'

export default function MembershipPriceInfo({ priceInfo }) {
  return (
    <MembershipPriceInfoContainer>
      <ul>
        {priceInfo.map((el) => (
          <li key={el.price_name}>
            <p>{el.price_name}</p>
            <p>{el.price_info}</p>
          </li>
        ))}
      </ul>
    </MembershipPriceInfoContainer>
  )
}

const MembershipPriceInfoContainer = styled.div``

// 이용권 가격 정보
