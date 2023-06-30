import { ICharacter } from '@common/types/IglobalContext'
import * as S from './styles'
import Title from '@components/Title'

interface IProps {
  character: ICharacter
  children: React.ReactNode
  isHeroPage?: boolean
}

const HeroCard = ({ character, isHeroPage, children }: IProps) => {
  const { name, thumbnail } = character

  return (
    <S.Container data-component="herocard-Container" isHeroPage={isHeroPage}>
      <S.Content data-component="herocard-Content" isHeroPage={isHeroPage}>
        <S.WrapperImage data-component="herocard-WrapperImage">
          <S.Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={`Imagem do personagem ${name}`}
          />
        </S.WrapperImage>

        <Title text={name} />
      </S.Content>

      <div>{children}</div>
    </S.Container>
  )
}

export default HeroCard
