import { useContext, useEffect } from "react"
import { useQuery } from "react-query"
import { ApiMarvel } from "@services/api"
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { ICharacter, IGlobalContext } from "@common/types/IglobalContext"
import Hero from "@components/Hero"
import { UserContext } from "@context/globalContext"


const AllHeros = () => {
    const { isLoading, error, data } = useQuery<any>(
        'allHeros',
        () => ApiMarvel.getCharacters()
    )

    const { search }: IGlobalContext = useContext(UserContext)

    useEffect(() => {
        console.log('data =>', data)
        console.log('search =>', search)
    }, [search, data])


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error?.message


    const characters: ICharacter[] = data?.data?.data?.results?.filter((character: ICharacter) => search ? character.name.toLowerCase().includes(search.toLowerCase()) : character)
    console.log("🚀 ~ file: index.tsx:30 ~ AllHeros ~ characters:", characters)

    return (
        characters.length ? (
            <Grid sx={{ marginTop: '100px' }} container columnSpacing={{ xs: 6, md: 5 }} rowSpacing={6}>
                {
                    characters?.map((character: ICharacter) => (
                        <Grid xs={2} md={4} key={character.id}>
                            <Hero  character={character} />
                        </Grid>
                    ))
                }
            </Grid>
        )
        :
        (<Typography sx={{marginTop: '30px'}} variant="body1" gutterBottom>
            Nenhum personagem foi encontrado 🙁
        </Typography>)
    )

}

export default AllHeros

