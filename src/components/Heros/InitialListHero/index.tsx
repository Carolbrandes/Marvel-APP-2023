import { useQuery } from 'react-query'
import { ApiMarvel } from '@services/api'
import Loading from '@components/Loading'
import HeroGrid from '../HeroGrid'
import Text from '@components/Text'
import MessageError from '@components/MessageError'

const InitialListHero = () => {
  const characters = localStorage.getItem('characters')
  const { isLoading, error, data } = useQuery<unknown, Error>(
    'allHeros',
    () =>
      !characters &&
      ApiMarvel.getCharacters().then((data) =>
        localStorage.setItem(
          'characters',
          JSON.stringify(data?.data?.data?.results)
        )
      )
  )

  if (isLoading) return <Loading />

  if (error) {
    return <MessageError text="Desculpe tivemos um erro ao carregar os dados" />
  }

  const charactersParser =
    (characters && JSON.parse(characters)) || data?.data?.data?.results

  return charactersParser?.length ? (
    <HeroGrid characters={charactersParser} />
  ) : (
    <Text>Nenhum personagem foi encontrado 🙁</Text>
  )
}

export default InitialListHero
