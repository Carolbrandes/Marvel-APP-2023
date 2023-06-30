import { Typography } from '@mui/material'

interface IProps {
  text: string
  styles?: any
}

const Text = ({ text, styles }: IProps) => (
  <Typography sx={styles} variant="body1" gutterBottom>
    {text}
  </Typography>
)

export default Text
