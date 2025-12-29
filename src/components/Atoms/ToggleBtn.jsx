import styled from 'styled-components'

export default function ToggleBtn({ onClickFn, children }) {
  return <ToggleButton onClick={onClickFn}>{children}</ToggleButton>
}

const ToggleButton = styled.button``
