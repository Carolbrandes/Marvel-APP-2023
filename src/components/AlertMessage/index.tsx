import Alert from '@mui/material/Alert';

interface IProps{
    type: string
    text: string
}
const AlertMessage = ({type, text}: IProps) => (
    <Alert severity={type || 'error'}>{text}</Alert>
)

export default AlertMessage