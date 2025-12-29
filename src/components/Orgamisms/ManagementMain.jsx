import styled from 'styled-components'

import { ManagementMenu } from '..'

export default function ManagementMain({ children }) {
  return (
    <ManagementMainContainer>
      <ManagementMenu />
      <MainArticle>{children}</MainArticle>
    </ManagementMainContainer>
  )
}

const ManagementMainContainer = styled.section`
  width: 60%;
`

const MainArticle = styled.article`
  height: 60%;
  /* background-color: skyblue; */
`
