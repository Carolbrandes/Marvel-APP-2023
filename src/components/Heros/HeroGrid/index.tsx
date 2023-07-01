import { memo, useContext, useState } from "react";
import { ICharacter, IGlobalContext } from "@common/types/IglobalContext";
import Pagination from "@components/Pagination";
import Grid from "@mui/material/Grid";
import HeroCard from "../HeroCard";
import * as S from "../styles";
import { UserContext } from "@context/globalContext";
import { useNavigate } from "react-router-dom";
interface IProps {
  characters: ICharacter[];
}

const HeroGrid = memo(({ characters }: IProps) => {
  const { setSelectedCharacter }: IGlobalContext = useContext(UserContext);
  const [charactersPerPage, setCharactersPerPage] = useState<ICharacter[]>();
  const navigate = useNavigate();

  const handleClick = (character: ICharacter) => {
    setSelectedCharacter && setSelectedCharacter(character);
    localStorage.setItem("selectedCharacter", JSON.stringify(character));
    navigate(`./${character.name.toLowerCase().trim()}/${character.id}`);
  };

  return (
    <>
      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-start" }}
        spacing={2}
        sx={{ margin: "40px 0" }}
      >
        {charactersPerPage?.length &&
          charactersPerPage?.map((character: ICharacter) => (
            <Grid
              key={character.id}
              xs={8}
              md={4}
              lg={3}
              sx={{ marginBottom: "30px" }}
            >
              <HeroCard character={character}>
                <S.ButtonLink
                  onClick={() => handleClick(character)}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Ver Mais
                </S.ButtonLink>
              </HeroCard>
            </Grid>
          ))}
      </Grid>

      <Pagination
        characters={characters}
        setCharactersPerPage={setCharactersPerPage}
      />
    </>
  );
});

export default HeroGrid;
