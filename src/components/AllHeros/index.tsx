import { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { ApiMarvel } from '@services/api'
import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ICharacter, IGlobalContext } from '@common/types/IglobalContext'
import Hero from '@components/Hero'
import { UserContext } from '@context/globalContext'
import Pagination from '@components/Pagination'
import Loading from '@components/Loading'
import AlertMessage from '@components/AlertMessage'

const AllHeros = () => {
  const [charactersPerPage, setCharactersPerPage] = useState([])
  const { isLoading, error, data } = useQuery<any>('allHeros', () =>
    ApiMarvel.getCharacters()
  )
  const { search }: IGlobalContext = useContext(UserContext)

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
        <AlertMessage
          type="error"
          text="Desculpe tivemos um erro ao carregar os dados"
        />
      </Stack>
    )

  const dataResult = data?.data?.data?.results
  const resultsCharacters = search
    ? dataResult.filter((data: ICharacter) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    : dataResult

  return resultsCharacters?.length ? (
    <>
      <Grid
        container
        columnSpacing={{ xs: 3 }}
        rowSpacing={5}
        sx={{ margin: '40px 0' }}
      >
        {charactersPerPage.length &&
          charactersPerPage?.map((character: ICharacter) => (
            <Grid xs={6} md={4} lg={3} key={character.id}>
              <Hero character={character} />
            </Grid>
          ))}
      </Grid>

      <Pagination
        resultCharacters={resultsCharacters}
        setCharactersPerPage={setCharactersPerPage}
      />
    </>
  ) : (
    <Typography sx={{ marginTop: '30px' }} variant="body1" gutterBottom>
      Nenhum personagem foi encontrado 🙁
    </Typography>
  )
}

export default AllHeros
