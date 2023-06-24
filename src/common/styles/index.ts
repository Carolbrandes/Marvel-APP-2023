import { createGlobalStyle } from 'styled-components'

const GlobalStyles:any = createGlobalStyle`
  :root {
    --background: #030518;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }


  a {
    color: var(--white);
  }
`

export default GlobalStyles
