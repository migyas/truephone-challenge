import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 55%;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    background-color: #F7F8F9;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
