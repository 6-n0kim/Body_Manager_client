import styled from 'styled-components'

import { ModalPortals } from '../../hooks/ModalPotals'

export default function ModalContainer({ children, onClickFn = () => {} }) {
  return (
    <ModalPortals>
      <ModalContainerBox>
        <BackgroundBlack onClick={() => onClickFn()} />
        <ModalContents>{children}</ModalContents>
      </ModalContainerBox>
    </ModalPortals>
  )
}

const ModalContainerBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

const BackgroundBlack = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.39);
`

const ModalContents = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 999;
`
