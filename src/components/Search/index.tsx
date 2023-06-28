import { useContext, ChangeEvent } from "react"
import { UserContext } from "@context/globalContext"
import { IGlobalContext } from "@common/types/IglobalContext"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import Button from '@mui/material/Button'

const Search = () => {
    const { search, setSearch }: IGlobalContext = useContext(UserContext);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => setSearch && setSearch(event.target.value)


    return (

        <Box mt={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
                id="search"
                label="Buscar Herói"
                variant="standard"
                value={search}
                onChange={handleInput}
                fullWidth
                autoFocus
            />
            <Button variant="text">
                <SearchRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </Button>

        </Box>

    )
}


export default Search