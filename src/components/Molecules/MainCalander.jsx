import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'
import 'moment/locale/ko'
import '../../style/Calendar.css'
import { useDispatch } from 'react-redux'

import { dateActions } from '../../store/date'
import { useLocation } from 'react-router-dom'

export default function MainCalander() {
  const [value, setValue] = useState(new Date())
  const [PTListArr, setPTListArr] = useState([])
  const dispatch = useDispatch()
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    setPTListArr(['2022-11-01', '2022-11-02', '2022-11-03', '2022-11-30'])
  }, [])

  // 주소가 바뀌면 달력의 선택 날짜를 오늘로 초기화
  useEffect(() => {
    dispatch(dateActions.pickMainDate(moment(new Date()).format('YYYY-MM-DD')))
    setValue(moment(new Date()).toDate())
  }, [pathname, dispatch])

  const datePickHanlder = (date) => {
    if (
      location.pathname.split('/')[2] !== 'exerciseplan' &&
      location.pathname.split('/')[2] !== 'diet'
    )
      return
    const formatDate = moment(date).format('YYYY-MM-DD')
    dispatch(dateActions.pickMainDate(formatDate))
    setValue(date)
  }

  const calendarMarkHanlder = ({ date, view }) => {
    const tag = []
    if (moment(date).format('YYYY-MM-DD') === '2022-11-30') {
      tag.push(<div>today</div>)
    }
    if (PTListArr.includes(moment(date).format('YYYY-MM-DD'))) {
      tag.push(<div>PT</div>)
    }
    return tag
  }
  return (
    <Calendar
      onChange={datePickHanlder}
      value={value}
      formatDay={(locale, date) => moment(date).format('DD')}
      showNeighboringMonth={false}
      minDetail="month"
      maxDetail="month"
      tileContent={calendarMarkHanlder}
    />
  )
}
