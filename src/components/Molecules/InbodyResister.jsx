import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function InbodyResister() {
  const navigation = useNavigate()
  const [inbody, setInbody] = useState({
    weight: 0,
    SMM: 0,
    BFM: 0,
    BMI: 0,
    PBF: 0,
    WHR: 0,
    BMR: 0,
    body_muscle: 0,
    left_hand_muscle: 0,
    right_hand_muscle: 0,
    left_leg_muscle: 0,
    right_leg_muscle: 0,
    body_fat: 0,
    left_hand_fat: 0,
    right_hand_fat: 0,
    left_leg_fat: 0,
    right_leg_fat: 0,
  })

  useEffect(() => {
    const message = 'ok'
    if (message === 'ok') {
      setInbody({
        weight: 1,
        SMM: 2,
        BFM: 3,
        BMI: 4,
        PBF: 5,
        WHR: 6,
        BMR: 7,
        body_muscle: 8,
        left_hand_muscle: 9,
        right_hand_muscle: 10,
        left_leg_muscle: 11,
        right_leg_muscle: 12,
        body_fat: 13,
        left_hand_fat: 14,
        right_hand_fat: 15,
        left_leg_fat: 16,
        right_leg_fat: 17,
      })
    }
  }, [])

  const inbodyHanlder = (e) => {
    const key = e.target.name
    const value = e.target.value
    setInbody({ ...inbody, [key]: value })
  }

  const submitHanlder = () => {
    alert('등록')
    navigation('/management')
  }

  return (
    <InbodyResisterContainer>
      <InputBox>
        {Object.keys(inbody).map((el) => (
          <InputList key={el}>
            <InputLabel>{el}</InputLabel>
            <Input
              type="number"
              onChange={inbodyHanlder}
              name={el}
              value={inbody[el]}
            />
          </InputList>
        ))}
      </InputBox>
      <SubmitBtn onClick={submitHanlder}>등록</SubmitBtn>
    </InbodyResisterContainer>
  )
}

const InbodyResisterContainer = styled.div``

const InputBox = styled.ul``

const InputList = styled.li``

const InputLabel = styled.label``

const Input = styled.input`
  border: 1px solid black;
`
const SubmitBtn = styled.button``
