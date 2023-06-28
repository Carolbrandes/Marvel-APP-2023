import { useContext, ChangeEvent } from "react"
import { UserContext } from "@context/globalContext"
import { IGlobalContext } from "@common/types/IglobalContext"
import TextField from '@mui/material/TextField'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import * as S from './styles'


const Search = () => {
    const { search, setSearch }: IGlobalContext = useContext(UserContext)

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => setSearch && setSearch(event.target.value)


    return (

        <S.BoxContainer mt={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
                id="search"
                label="Buscar Herói"
                variant="standard"
                value={search}
                onChange={handleInput}
                fullWidth
                autoFocus
            />

            <S.WrapperIconSearch>
                <SearchRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </S.WrapperIconSearch>

        </S.BoxContainer>

    )
}


export default Search