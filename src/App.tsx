import { RouterProvider } from 'react-router-dom'
import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material'
import { router } from '@/router'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50914' },
    background: { default: '#141414', paper: '#1f1f1f' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        '*::-webkit-scrollbar': { width: '8px' },
        '*::-webkit-scrollbar-track': { background: '#141414' },
        '*::-webkit-scrollbar-thumb': { background: '#e50914', borderRadius: '4px' },
        '*::-webkit-scrollbar-thumb:hover': { background: '#b20710' },
      }} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
