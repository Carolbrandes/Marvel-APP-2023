import { createContext, ReactNode, useState } from 'react'

interface Props {
  children?: ReactNode
}

export const UserContext = createContext({})

export const UserStorage = ({ children }: Props) => {
  const [search, setSearch] = useState('')
  
  return (
    <UserContext.Provider
      value={{
        search,
        setSearch
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
