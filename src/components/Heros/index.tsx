import { useContext } from 'react'
import { IGlobalContext } from '@common/types/IglobalContext'
import { UserContext } from '@context/globalContext'
import InitialListHero from './InitialListHero'
import HeroByName from './HeroByName'

const Heros = () => {
  const { search }: IGlobalContext = useContext(UserContext)

  if (search && search.length) return <HeroByName />

  return <InitialListHero />
}

export default Heros
