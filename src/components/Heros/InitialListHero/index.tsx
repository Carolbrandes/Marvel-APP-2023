import { useQuery } from 'react-query'
import { ApiMarvel } from '@services/api'
import { Stack } from '@mui/material'
import Loading from '@components/Loading'
import HeroGrid from '../HeroGrid'
import Text from '@components/Text'
import MessageError from '@components/MessageError'

const InitialListHero = () => {
  const characters = localStorage.getItem('characters')
  const { isLoading, error, data } = useQuery<any>(
    'allHeros',
    () => !characters && ApiMarvel.getCharacters().then((data) => localStorage.setItem('characters', JSON.stringify(data?.data?.data?.results)))
  )

  

  if (isLoading) return <Loading />

  if (error) {
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
  }

  const charactersParser = (characters && JSON.parse(characters)) || data?.data?.data?.results
  
  

  return charactersParser?.length ? (
    <HeroGrid characters={charactersParser} />
  ) : (
    <Text
      styles={{ marginTop: '30px' }}
      text=" Nenhum personagem foi encontrado 🙁"
    />
  )
}

export default InitialListHero
