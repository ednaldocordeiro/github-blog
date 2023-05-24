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

  h1 {
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    display: flex !important;
    align-items: center;
    gap: 0.5rem;

    font-size: .75rem;
    font-weight: 700;
    color: ${props => props.theme.blue};
    text-decoration: none;
  }

  @media (max-width: 550px) {
    html {
      font-size: 85.7%
    }
  }
`
