import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { InbodyLineChart, InbodyBarChart } from '..'

export default function InbodyEtcData() {
  const etcInbodyData = useSelector((state) => state.chart.etcInbody)
  const lineData = useSelector((state) => state.chart.lineData)
  const barData = []
  const etcData = []

  Object.keys(etcInbodyData).forEach((el) => {
    if (el !== 'WEIGHT' && el !== 'SMM' && el !== 'BFM') {
      etcData.push({ name: el, value: etcInbodyData[el] })
      return
    }
    barData.push({ name: el, value: etcInbodyData[el] })
  })

  return (
    <InbodyEtcDataContainer>
      <InbodyBarChart barData={barData} />
      {etcData.map((el) => (
        <div>{el.name + ' ' + el.value}</div>
      ))}
      <InbodyLineChart lineData={lineData} />
    </InbodyEtcDataContainer>
  )
}

const InbodyEtcDataContainer = styled.div`
  height: 100vh;
`
