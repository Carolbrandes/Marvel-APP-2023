import { createContext, ReactNode, useEffect, useState } from "react"

interface Props {
    children?: ReactNode;
}

export const UserContext = createContext({})

export const UserStorage = ({ children }: Props) => {
    const [search, setSearch] = useState('')
    
    
    useEffect(() => {
        console.log("🚀 ~ file: globalContext.tsx:11 ~ UserStorage ~ search:", search)

    }, [search])


    return (
        <UserContext.Provider
            value={{ search, setSearch }}
        >
            {children}
        </UserContext.Provider>
    )
}