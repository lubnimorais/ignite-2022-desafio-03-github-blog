import { createGlobalStyle } from 'styled-components';

import firaCode from '../assets/fonts/FiraCode-Regular.woff';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;

    padding: 0;

    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['brand-blue']};
      border-radius: 999px;
    }
  }

  :focus {
    outline: none;
  }

  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: ${({ theme }) => theme.textSizes['text-text-m']};
    font-size: 400;

    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  a {
    /* tira a cor azul e o link pega a cor padrão do elemento que tiver */
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyles };
