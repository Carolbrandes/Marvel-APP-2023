import AppRoutes from 'routes'
import { UserStorage } from '@context/globalContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as S from './styles'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserStorage>
        <S.SContainer maxWidth="xl">
          <AppRoutes />
        </S.SContainer>
      </UserStorage>
    </QueryClientProvider>
  )
}

export default App
