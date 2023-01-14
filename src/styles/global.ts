import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['base-background']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme['base-text']};
  }

  :focus {
    box-shadow: 0 0 0 2px ${props => props.theme['base-text']};
    outline: 0;
  }

  @media (max-width: 550px) {
    html {
      font-size: 85.7%
    }
  }
`
