import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => (
  <Stack
    sx={{
      color: 'grey.500',
      margin: '80px 0',
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translateX(-50%)'

    }}
    spacing={5}
  >
    <CircularProgress size={60} color="inherit" />
  </Stack>
)

export default Loading
