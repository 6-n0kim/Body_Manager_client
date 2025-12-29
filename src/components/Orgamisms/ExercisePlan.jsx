import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment/moment'

import { SinglePlan } from '..'

export default function ExercisePlan() {
  const [planArr, setPlanArr] = useState([])
  const mainPickDate = useSelector((state) => state.date.mainDate)

  useEffect(() => {
    setPlanArr([
      {
        title: '제목1',
        weight: '20kg',
        count: '10',
        created_at: moment(new Date()).format('YYYY-MM-DD'),
      },
      {
        title: '제목2',
        weight: '20kg',
        count: '10',
        created_at: moment(new Date()).format('YYYY-MM-DD'),
      },
    ])
  }, [mainPickDate])
  return (
    <ExercisePlanContainer>
      <div>{mainPickDate}</div>
      {planArr.map((el) => (
        <li key={`${el.title} ${el.weight} ${el.count}`}>
          <SinglePlan planData={el} />
        </li>
      ))}
    </ExercisePlanContainer>
  )
}

const ExercisePlanContainer = styled.ul``
