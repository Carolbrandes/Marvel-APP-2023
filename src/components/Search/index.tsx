import { useContext, ChangeEvent } from "react";
import { UserContext } from "@context/globalContext";
import { IGlobalContext } from "@common/types/IglobalContext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import * as S from "./styles";

const Search = () => {
  const { search, setSearch }: IGlobalContext = useContext(UserContext);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch && setSearch(event.target.value);

  return (
    <S.BoxContainer
      data-component="search-BoxContainer"
      mt={3}
      sx={{ display: "flex", alignItems: "flex-end", width: "80%" }}
    >
      <S.WrapperIconSearch data-component="search-WrapperIconSearch">
        <SearchRoundedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      </S.WrapperIconSearch>
      <S.Input
        data-component="search"
        label="Buscar Herói"
        variant="standard"
        value={search}
        onChange={handleInput}
        fullWidth
      />
    </S.BoxContainer>
  );
};

export default Search;
