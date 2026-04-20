import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h2" >404</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Página no encontrada
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Volver al inicio
      </Button>
    </Box>
  )
}

export default NotFoundPage
