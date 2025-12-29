import ReactDOM from 'react-dom'

export const ModalPortals = ({ children }) => {
  const modalElement = document.querySelector('#modal')

  return ReactDOM.createPortal(children, modalElement)
}
