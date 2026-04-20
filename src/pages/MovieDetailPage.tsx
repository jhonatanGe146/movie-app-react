import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const MovieDetailPage = () => {
  const { id } = useParams()
  return <Typography variant="h4">Detalle de película #{id}</Typography>
}

export default MovieDetailPage
