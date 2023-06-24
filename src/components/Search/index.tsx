import { useContext, ChangeEvent } from "react"
import { UserContext } from "@context/globalContext"
import { IGlobalContext } from "@common/types/IglobalContext"

const Search = () => {
    const { search, setSearch }: IGlobalContext = useContext(UserContext);

    const handleInput = (value: string) => setSearch && setSearch(value)

    return (
        <>
            <label>
                <span>Encontre seu herói:</span>
                <input
                    value={search}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => handleInput(target.value)}
                />
            </label>
        </>
    )
}





export default Search