export interface IGlobalContext {
    search?: string 
    setSearch?: (value: string) => void
}

export interface ICharacter{
    "id": number
    "name": string
    "description": string
    "thumbnail": IThumbnail
}

interface IThumbnail{
    "path": string
    "extension": string
}

