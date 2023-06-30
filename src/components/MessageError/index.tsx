import Alert from '@mui/material/Alert'
import * as S from './styles'

interface IProps {
  text: string
}
const MessageError = ({ text }: IProps) => (
  <S.ErrorContainer data-component="loading-ErrorContainer">
    <Alert severity="error">{text}</Alert>
  </S.ErrorContainer>
)

export default MessageError
