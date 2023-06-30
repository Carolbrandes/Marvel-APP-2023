import { IItemsSeries } from '@common/types/IglobalContext'
import HeroCard from '@components/Heros/HeroCard'
import * as S from './styles'
import Title from '@components/Title'
import Text from '@components/Text'
import Breadcrumb from '@components/BreadCrumb'

const HeroPage = () => {
  const characterSelected = localStorage.getItem('selectedCharacter')

  const characterSelectedParse =
    characterSelected && JSON.parse(characterSelected)

  return (
    characterSelectedParse && (
      <>
        <Breadcrumb />
        <HeroCard character={characterSelectedParse} isHeroPage>
          <S.Infos data-component="hero-Info">
            <Title text="Descrição:" />

            {characterSelectedParse?.description ? (
              <Text>{characterSelectedParse?.description}</Text>
            ) : (
              <Text>Nenhuma descrição encontrada</Text>
            )}
          </S.Infos>

          <S.Infos data-component="hero-Info">
            <Title text="Séries:" />
            {characterSelectedParse?.series?.items?.length ? (
              <>
                <S.List data-component="hero-List">
                  <Text>
                    {characterSelectedParse?.series?.items.map(
                      (item: IItemsSeries) => (
                        <li key={item.name}>
                          <a href={item.resourceURI}>{item.name}</a>
                        </li>
                      )
                    )}
                  </Text>
                </S.List>
              </>
            ) : (
              <Text>Nenhuma série encontrada</Text>
            )}
          </S.Infos>
        </HeroCard>
      </>
    )
  )
}

export default HeroPage
