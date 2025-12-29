import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { MembershipPriceInfo, MembershipForm } from '..'

export default function Membership() {
  const [priceInfo, setPriceInfo] = useState({ price: [], PT: [] })
  const [perchaseList, setPerchseList] = useState([])

  useEffect(() => {
    setPriceInfo({
      price: [
        {
          price_id: 1,
          price_name: '3개월권',
          price_info: 150000,
        },
      ],
      pt: [
        {
          pt_id: 1,
          trainer_name: '한태규',
          pt_price: 300000,
        },
      ],
    })
    setPerchseList([
      {
        price_id: 1,
        price_name: '3개월권',
        price_info: 150000,
      },
    ])
  }, [])

  const perchaseListAddHanlder = (perchaseNum) => {
    setPerchseList([...perchaseList, priceInfo[perchaseNum]])
  }

  const perchaseHanlder = () => {
    console.log(perchaseList)
  }

  return (
    <MembershipContainer>
      <FormTitle>Membership</FormTitle>
      <MembershipPriceInfo priceInfo={priceInfo.price} />
      <MembershipForm
        priceInfo={priceInfo}
        selectClickFn={perchaseListAddHanlder}
        submitClickFn={perchaseHanlder}
      />
    </MembershipContainer>
  )
}

const MembershipContainer = styled.div``
const FormTitle = styled.div``
