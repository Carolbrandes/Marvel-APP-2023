import styled from 'styled-components'
import Button from '@mui/material/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const WrapperImage = styled.div`
  width: 250px;
  height: 250px;
  border: 3px solid #333232;
  margin-bottom: 7px;
`

export const ButtonLink = styled(Button)`
  border-color: #333232;
  color: #333232;
  margin-top: 10px;
`
