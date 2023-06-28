import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface ThemeOptions {
    fonts: {
      body: string
      heading: string
      monospace: string
    };

    colors: {
      text: string
      background: string
      primary: string
    }
  }
}

const themeMUI = createTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
})

export default themeMUI


