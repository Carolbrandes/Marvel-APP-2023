import { memo, useEffect, useState } from 'react'
import { ICharacter } from '@common/types/IglobalContext'
import Pagination from '@components/Pagination'
import Grid from '@mui/material/Grid'
import HeroCard from '../HeroCard'

interface IProps {
  characters: ICharacter[]
}

const HeroGrid = memo(({ characters }: IProps) => {
  const [charactersPerPage, setCharactersPerPage] = useState<ICharacter[]>()

  
  useEffect(() => console.log('HeroGrid render'))

  return (
    <>
      <Grid
        container
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
        sx={{ margin: '40px 0' }}
      >
        {charactersPerPage?.length &&
          charactersPerPage?.map((character: ICharacter) => (
            <Grid key={character.id} xs={8} md={4} lg={3} sx={{ marginBottom: '30px' }}>
              <HeroCard character={character} />
            </Grid>
          ))}
      </Grid>

      <Pagination
        characters={characters}
        setCharactersPerPage={setCharactersPerPage}
      />
    </>
  )
})

export default HeroGrid
