import { Box, Typography } from '@mui/material'
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { toggleFavorite } from '@/features/movies/store/moviesSlice'
import MovieGrid from '@/features/movies/components/MovieGrid'

const FavoritesPage = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.movies.favorites)

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Mis favoritos
      </Typography>

      {favorites.length === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: 'center', mt: 8 }}>
          No tienes películas favoritas aún. ¡Agrega algunas desde el inicio!
        </Typography>
      ) : (
        <MovieGrid
          movies={favorites}
          status="succeeded"
          error={null}
          isFavorite={() => true}
          onToggleFavorite={(movie) => dispatch(toggleFavorite(movie))}
        />
      )}
    </Box>
  )
}

export default FavoritesPage
