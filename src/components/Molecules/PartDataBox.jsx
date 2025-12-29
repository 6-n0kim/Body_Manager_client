import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import '../../style/react-datepicker.css'

export default function PartDataBox({ radarData = [] }) {
  const [startDate, setStartDate] = useState(new Date())

  // 날짜를 2개를 선택하면 최근값에서 과거값을 뺀 값을 반환하고, 한개만 선택하면 해당 값을 반환한 값의 배열
  const dataArr = radarData.map((el) => {
    const keyArr = Object.keys(el)
      .filter((el) => el !== 'subject')
      .sort()
    let result = 0

    result += el[keyArr.pop()]

    while (keyArr.length) {
      result -= el[keyArr.pop()]
    }
    return Math.round(result * 10) / 10
  })

  const subject = radarData.map((el) => {
    return el['subject']
  })

  return (
    <PartDataBoxContainer>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      {subject.map((el, idx) => (
        <div key={idx}>
          {el} {dataArr[idx]}
        </div>
      ))}
    </PartDataBoxContainer>
  )
}

const PartDataBoxContainer = styled.div``

// 데이터가 두개일땐, datepicker가 2개 두데이터를 비교해서 그 차를 표기
// 데이터가 한개일땐, datepicker가 1개 그냥 데이터를 표기

//서브젝트를 제거하고, 날짜순으로 정렬한다음, 최신순에서 나머지를 빼기
