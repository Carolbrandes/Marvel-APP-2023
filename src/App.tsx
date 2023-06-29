import AppRoutes from 'routes'
import themeMUI from '@common/styles'
import { UserStorage } from '@context/globalContext'
import { ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <ThemeProvider theme={themeMUI}>
      <QueryClientProvider client={queryClient}>
        <UserStorage>
          <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} maxWidth="xl">
            <AppRoutes />
          </Container>
        </UserStorage>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
