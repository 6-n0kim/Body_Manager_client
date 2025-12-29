import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
      box-sizing:border-box;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
  input {
    border: none;
    outline: none;
    
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button{
    border:none;
    background: none;
    cursor: pointer;
  }
`

export default GlobalStyle
