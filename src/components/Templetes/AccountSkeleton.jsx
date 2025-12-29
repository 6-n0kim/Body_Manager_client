import styled from 'styled-components'
import { loadTossPayments } from '@tosspayments/payment-sdk'

import { SubscribeInfo, PaymentInfo } from '..'

export default function AccountSkeleton() {
  const clickEvent = () => {
    loadTossPayments(process.env.REACT_APP_CLIENTKEY).then((tossPayments) => {
      tossPayments
        .requestPayment('카드', {
          amount: 15000,
          orderId: '92TGiRz4i5cFvPoZToKMW',
          orderName: '토스 티셔츠 외 2건',
          customerName: '박토스',
          successUrl: 'http://localhost:8080/success',
          failUrl: 'http://localhost:8080/fail',
        })
        .then((res) => console.log(res))
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            console.log('사용자가 결제창을 닫음')
          } else if (error.code === 'INVALID_CARD_COMPANY') {
            console.log('유효하지 않은 키')
          }
        })
    })
  }

  return (
    <AccountSkeletonContainer>
      <SubscribeInfo />
      <PaymentInfo />
      <button onClick={clickEvent}>버튼</button>
    </AccountSkeletonContainer>
  )
}

const AccountSkeletonContainer = styled.main`
  display: flex;
  width: 100vw;
`
