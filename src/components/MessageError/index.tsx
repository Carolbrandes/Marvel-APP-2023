import Alert from '@mui/material/Alert';

interface IProps{
    text: string
}
const MessageError = ({text}: IProps) => (
    <Alert severity='error'>{text}</Alert>
)

export default MessageError