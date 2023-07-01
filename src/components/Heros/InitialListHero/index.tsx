import { useQuery } from "react-query";
import { ApiMarvel } from "@services/api";
import Loading from "@components/Loading";
import HeroGrid from "../HeroGrid";
import Text from "@components/Text";
import MessageError from "@components/MessageError";
import { ICharacter } from "@common/types/IglobalContext";
import { useState } from "react";

const InitialListHero = () => {
  const [characterList, setCharacterList] = useState<ICharacter[]>();
  const [noCharactersFound, setNoCharactersFound] = useState(false);
  const { isLoading, error } = useQuery<unknown, Error>("allHeros", () => {
    setNoCharactersFound(false);
    ApiMarvel.getCharacters().then((data) => {
      const res = data?.data?.data?.results;
      setNoCharactersFound(res.length > 0 ? false : true);
      setCharacterList(res);
    });
  });

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <MessageError text="Desculpe tivemos um erro ao carregar os dados" />
    );
  }

  return characterList?.length ? (
    <HeroGrid characters={characterList} />
  ) : noCharactersFound ? (
    <Text>Nenhum personagem foi encontrado 🙁</Text>
  ) : null;
};

export default InitialListHero;
