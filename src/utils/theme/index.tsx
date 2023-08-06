import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#000272',
      contrastText: '#fff',
    },
    secondary: {
      main: '#cb2e43',
    },
  },
})

export default theme
