import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <MovieIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 700 }}
        >
          MovieApp
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={NavLink} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={NavLink} to="/favorites" startIcon={<FavoriteIcon />}>
            Favoritos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
