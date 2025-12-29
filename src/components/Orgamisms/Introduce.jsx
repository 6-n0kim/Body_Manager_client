import styled from 'styled-components'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

export default function Intorduce() {
  const data = [
    {
      name: 'Page A',
      pv: 800,
    },
    {
      name: 'Page B',
      pv: 967,
    },
    {
      name: 'Page C',
      pv: 1098,
    },
    {
      name: 'Page D',
      pv: 1200,
    },
    {
      name: 'Page E',
      pv: 1108,
    },
    {
      name: 'Page F',
      pv: 680,
    },
  ]

  return (
    <IntroduceContainer>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </IntroduceContainer>
  )
}

const IntroduceContainer = styled.div`
  width: 70%;
  height: 100vh;
  background-color: red;
`
