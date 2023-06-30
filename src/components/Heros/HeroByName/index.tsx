import { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { ApiMarvel } from '@services/api'
import { UserContext } from '@context/globalContext'
import Loading from '@components/Loading'
import { ICharacter, IGlobalContext } from '@common/types/IglobalContext'
import HeroGrid from '../HeroGrid'
import Text from '@components/Text'
import MessageError from '@components/MessageError'

const HeroByName = () => {
  const { search }: IGlobalContext = useContext(UserContext)
  const [searchCharacters, setSearchCharacters] = useState<ICharacter[]>()
  const [noCharactersFound, setNoCharactersFound] = useState(false)
  const { isLoading, error } = useQuery<unknown, Error>(
    ['HerosByName', search],
    () => {
      setNoCharactersFound(false)
      search &&
        search?.length > 2 &&
        setTimeout(
          () =>
            ApiMarvel.getCharacterByName(search).then((data) => {
              const res = data?.data?.data?.results
              setNoCharactersFound(res.length > 0 ? false : true)
              setSearchCharacters(res)
            }),
          300
        )
    }
  )

  if (isLoading) return <Loading />

  if (error)
    return <MessageError text="Desculpe tivemos um erro ao carregar os dados" />

  return searchCharacters?.length ? (
    <HeroGrid characters={searchCharacters} />
  ) : noCharactersFound ? (
    <Text>Nenhum personagem foi encontrado 🙁</Text>
  ) : null
}

export default HeroByName
