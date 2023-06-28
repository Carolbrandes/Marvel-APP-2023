import { ICharacter } from '@common/types/IglobalContext'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import * as S from './styles'

interface IProps {
    character: ICharacter
    ownPage?: boolean
}

const Hero = ({ character, ownPage }: IProps) => {
    const { id, name, description, thumbnail } = character

    const link = ownPage ? '/' : `./${name}/${id}`

    return (
        <S.Container>
            <S.WrapperImage>
                <S.Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Imagem do personagem ${name}`} />
            </S.WrapperImage>

            <Typography variant="h6" gutterBottom>
                {name}
            </Typography>

            {
              ownPage && <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
            }

            <Link to={link}>
                <S.ButtonLink variant="outlined" color="primary" size="large">
                   {ownPage ? 'Voltar' : 'Ver Mais'}
                </S.ButtonLink>
            </Link>
        </S.Container>
    )
}

export default Hero