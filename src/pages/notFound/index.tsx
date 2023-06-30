import Breadcrumb from '@components/BreadCrumb'
import * as S from './styles'

const NotFound = () => (
  <S.Container data-component="notfound-Container">
    <h1>Página não encontrada</h1>

    <Breadcrumb isNotFound />
  </S.Container>
)

export default NotFound
