import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { InbodyRadarChart, PartDataBox } from '..'

export default function MuscleFatChart() {
  const radarData = useSelector((state) => state.chart.radarData)
  return (
    <MuscleFatRadarChartContainer>
      <InbodyRadarChart radarData={radarData} />
      <PartDataBox radarData={radarData} />
    </MuscleFatRadarChartContainer>
  )
}

const MuscleFatRadarChartContainer = styled.div`
  height: 100vh;
`
