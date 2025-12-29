import { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { AttendanceBtn } from '..'

export default function Attendance() {
  const [attendanceRecord, setAttendanceRecord] = useState([])

  useEffect(() => {
    setAttendanceRecord([
      {
        start_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        end_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      },
    ])
  }, [])

  const AttendanceHanlder = (type) => {
    alert(type + '시도')
  }

  return (
    <AttendanceContainer>
      <AttendanceBtn onClickFn={() => AttendanceHanlder('일반 출석')}>
        asd
      </AttendanceBtn>
      <AttendanceBtn onClickFn={() => AttendanceHanlder('PT 출석')}>
        zxc
      </AttendanceBtn>
      <RecordBox>
        <RecordTitle>출석기록</RecordTitle>
        <AttendanceRecord>
          {attendanceRecord.map((el, idx) => (
            <li key={idx}>
              {'입장기록 : ' + el.start_time + ' 퇴장기록 : ' + el.end_time}
            </li>
          ))}
        </AttendanceRecord>
      </RecordBox>
    </AttendanceContainer>
  )
}

const AttendanceContainer = styled.div``

const RecordBox = styled.div``

const RecordTitle = styled.h1``

const AttendanceRecord = styled.ul``
