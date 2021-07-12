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

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0,0,0, 0.2);
  }

  *::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 50px;
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
