import { ICharacter } from "@common/types/IglobalContext";
import { createContext, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
}

export const UserContext = createContext({});

export const UserStorage = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();

  return (
    <UserContext.Provider
      value={{
        search,
        setSearch,
        selectedCharacter,
        setSelectedCharacter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
