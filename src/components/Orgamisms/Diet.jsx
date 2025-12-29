import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { SingleDiet } from '..'
import { ModalPortals } from '../../hooks/ModalPotals'

export default function Diet() {
  const [dietData, setDietData] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const mainPickDate = useSelector((state) => state.date.mainDate)

  useEffect(() => {
    setDietData({
      breakfast: {
        id: 1,
        photo: 'S3 경로',
        context: '사과 3개',
        created_at: '08:34 AM',
        grade: 2,
      },
      lunch: {
        id: 2,
        photo: 'S3 경로',
        context: '삼겹살 5인분',
        created_at: '12:09 PM',
        grade: 1,
      },
      dinner: {},
    })
  }, [mainPickDate])

  const modalOpenHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DietContainer>
      <div>{mainPickDate}</div>
      <DietList>
        {Object.keys(dietData).map((el) => (
          <li onClick={modalOpenHandler} key={el}>
            <SingleDiet info={dietData[el]} />
          </li>
        ))}
      </DietList>
      <ModalPortals>
        {isOpen && <Modal onClick={modalOpenHandler}>등록 모달 열림</Modal>}
      </ModalPortals>
    </DietContainer>
  )
}

const DietContainer = styled.div``

const DietList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Modal = styled.div`
  position: fixed;
`
