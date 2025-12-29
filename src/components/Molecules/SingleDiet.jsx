import styled from 'styled-components'

export default function SingleDiet({ info }) {
  const { photo, context, created_at, grade } = info

  return (
    <SingleDietContainer>
      <PhotoFrame>
        <img src={photo} alt="food" />
      </PhotoFrame>
      <InfoFrame>
        <div>{context}</div>
        <div>{created_at}</div>
      </InfoFrame>
      <ScoreColor>{grade}</ScoreColor>
    </SingleDietContainer>
  )
}

const SingleDietContainer = styled.div`
  display: flex;
  border: 1px solid black;
`

const PhotoFrame = styled.div``

const InfoFrame = styled.div``

const ScoreColor = styled.div``
