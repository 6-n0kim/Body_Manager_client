import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ChartSkeleton } from '../components'
import { chartActions } from '../store/chart'

export default function Chart() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      chartActions.changeData({
        dataType: 'radarData',
        dataValue: [
          {
            subject: 'body',
            '2022-11-24': 10.0,
            '2022-11-25': 10.1,
          },
          {
            subject: 'right_hand',
            '2022-11-24': 2.3,
            '2022-11-25': 2.4,
          },
          {
            subject: 'left_hand',
            '2022-11-24': 2.3,
            '2022-11-25': 2.4,
          },
          {
            subject: 'right_leg',
            '2022-11-24': 2.3,
            '2022-11-25': 2.4,
          },
          {
            subject: 'left_leg',
            '2022-11-24': 2.3,
            '2022-11-25': 2.4,
          },
        ],
      }),
    )
    dispatch(
      chartActions.changeData({
        dataType: 'etcInbody',
        dataValue: {
          WEIGHT: 4,
          SMM: 1,
          BFM: 2,
          BMI: 3,
          PBF: 4,
          WHR: 5,
          BMR: 6,
        },
      }),
    )
    dispatch(
      chartActions.changeData({
        dataType: 'lineData',
        dataValue: [
          {
            name: '2022-11-15',
            weight: 4,
            SMM: 1,
            BFM: 2,
          },
          {
            name: '2022-11-16',
            weight: 5,
            SMM: 2,
            BFM: 3,
          },
          {
            name: '2022-11-17',
            weight: 6,
            SMM: 3,
            BFM: 4,
          },
          {
            name: '2022-11-18',
            weight: 7,
            SMM: 4,
            BFM: 5,
          },
          {
            name: '2022-11-19',
            weight: 8,
            SMM: 5,
            BFM: 6,
          },
          {
            name: '2022-11-20',
            weight: 9,
            SMM: 6,
            BFM: 7,
          },
          {
            name: '2022-11-21',
            weight: 10,
            SMM: 7,
            BFM: 8,
          },
          {
            name: '2022-11-22',
            weight: 11,
            SMM: 8,
            BFM: 9,
          },
          {
            name: '2022-11-23',
            weight: 12,
            SMM: 9,
            BFM: 10,
          },
          {
            name: '2022-11-24',
            weight: 13,
            SMM: 10,
            BFM: 11,
          },
        ],
      }),
    )
  }, [dispatch])
  return <ChartSkeleton />
}
