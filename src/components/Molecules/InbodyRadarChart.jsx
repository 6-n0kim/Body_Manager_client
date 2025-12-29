import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

export default function InbodyRadarChart({ radarData }) {
  return (
    <RadarChart
      cx={500}
      cy={400}
      outerRadius={300}
      width={1000}
      height={800}
      data={radarData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={18} domain={[0, 3]} />
      <Radar
        name="2022-11-24"
        dataKey="2022-11-24"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.5}
      />
      <Radar
        name="2022-11-25"
        dataKey="2022-11-25"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.5}
      />
    </RadarChart>
  )
}
