import * as S from './styles'

interface IProps {
  children: React.ReactNode
}

const Text = ({ children }: IProps) => (
  <S.Text data-component="text-Text" variant="body1" gutterBottom>
    {children}
  </S.Text>
)

export default Text
