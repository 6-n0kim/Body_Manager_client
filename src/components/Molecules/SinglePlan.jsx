import styled from 'styled-components'

export default function SinglePlan({ planData }) {
  const { title, weight, count } = planData
  return (
    <SinglePlanContainer>
      <li>{title}</li>
      <li>{weight}</li>
      <li>{count}</li>
    </SinglePlanContainer>
  )
}

const SinglePlanContainer = styled.ul``
