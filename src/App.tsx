import AppRoutes from 'routes'
import GlobalStyles from '@common/styles'
import { UserStorage } from '@context/globalContext'


function App() {

  return (
    <>
      <GlobalStyles />
      <UserStorage>
        <AppRoutes />
      </UserStorage>
    </>
  )
}

export default App
