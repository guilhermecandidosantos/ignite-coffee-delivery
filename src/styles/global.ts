import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    color: ${props => props.theme['base-text']};
    position: relative;
  }
`
