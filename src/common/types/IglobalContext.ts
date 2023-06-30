export interface IGlobalContext {
  search?: string;
  setSearch?: (value: string) => void;
  selectedCharacter?: ICharacter;
  setSelectedCharacter?: (value: ICharacter) => void;
}

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: IThumbnail;
  series: ISeries;
}

export interface ISeries {
  items: IItemsSeries[];
}

export interface IItemsSeries {
  name: string;
  resourceURI: string;
}

export interface IThumbnail {
  path: string;
  extension: string;
}
