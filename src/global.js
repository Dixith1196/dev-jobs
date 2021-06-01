
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
 
  .MuiCard-root {
    background: ${({ theme }) => theme.Card} !important;
    color: ${({ theme }) => theme.text};
  }

    `