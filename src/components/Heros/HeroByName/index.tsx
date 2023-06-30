import { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { ApiMarvel } from '@services/api'
import { Stack } from '@mui/material'
import { UserContext } from '@context/globalContext'
import Loading from '@components/Loading'
import { ICharacter, IGlobalContext } from '@common/types/IglobalContext'
import HeroGrid from '../HeroGrid'
import Text from '@components/Text'
import MessageError from '@components/MessageError'

const HeroByName = () => {
  const { search }: IGlobalContext = useContext(UserContext)
  const [searchCharacters, setSearchCharacters] = useState<ICharacter[]>()
  const { isLoading, error } = useQuery<any>(['HerosByName', search], () => {
    search &&
      search?.length > 2 &&
      setTimeout(
        () =>
          ApiMarvel.getCharacterByName(search).then((data) =>
            setSearchCharacters(data?.data?.data?.results)
          ),
        300
      )
  })

  
  if (isLoading) return <Loading />

  if (error)
    return (
      <Stack
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          margin: '30px 0'
        }}
        spacing={5}
      >
        <MessageError text="Desculpe tivemos um erro ao carregar os dados" />
      </Stack>
    )

  return searchCharacters?.length ? (
    <HeroGrid characters={searchCharacters} />
  ) : (
    <Text
      styles={{ marginTop: '30px' }}
      text=" Nenhum personagem foi encontrado 🙁"
    />
  )
}

export default HeroByName
