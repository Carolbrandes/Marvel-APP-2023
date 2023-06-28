import { useEffect } from "react"
import { useQuery } from "react-query"
import { ApiMarvel } from "@services/api"
import Grid from '@mui/material/Unstable_Grid2'
import { ICharacter } from "@common/types/IglobalContext"
import Hero from "@components/Hero"


const AllHeros = () => {
    const { isLoading, error, data } = useQuery<any>(
        'allHeros',
        () => ApiMarvel.getCharacters()
    )

   
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error?.message


    return (
        <Grid sx={{marginTop: '100px'}} container columnSpacing={{ xs: 6, md: 5 }} rowSpacing={6}>
            {
                data?.data?.data?.results?.map((character: ICharacter) => (
                    <Grid xs={6} md={4}>
                        <Hero key={character.id} character={character} />
                    </Grid>
                ))
            }
        </Grid>
    )

}

export default AllHeros

