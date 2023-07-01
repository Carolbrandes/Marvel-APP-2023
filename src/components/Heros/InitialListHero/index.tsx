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
  const { isLoading, error } = useQuery<unknown, Error>("allHeros", () =>
    ApiMarvel.getCharacters().then((data) =>
      setCharacterList(data?.data?.data?.results)
    )
  );

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <MessageError text="Desculpe tivemos um erro ao carregar os dados" />
    );
  }

  return characterList?.length ? (
    <HeroGrid characters={characterList} />
  ) : (
    <Text>Nenhum personagem foi encontrado 🙁</Text>
  );
};

export default InitialListHero;
