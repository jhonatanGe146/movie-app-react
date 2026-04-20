import { Box, Chip, IconButton, Rating, Tooltip, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import type { MovieDetail } from '../types/movie.types'

const IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE_URL

interface Props {
  movie: MovieDetail
  isFavorite: boolean
  onToggleFavorite: () => void
}

const MovieDetailHero = ({ movie, isFavorite, onToggleFavorite }: Props) => {
  const navigate = useNavigate()
  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE}/w1280${movie.backdrop_path}`
    : null
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE}/w342${movie.poster_path}`
    : null

  return (
    <Box>
      {backdropUrl && (
        <Box
          sx={{
            width: '100%',
            height: { xs: 200, md: 400 },
            backgroundImage: `linear-gradient(to bottom, rgba(20,20,20,0.2), #141414), url(${backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            borderRadius: 2,
            mb: 3,
          }}
        />
      )}

      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
        {posterUrl && (
          <Box
            component="img"
            src={posterUrl}
            alt={movie.title}
            sx={{ width: { xs: '100%', sm: 200 }, borderRadius: 2, flexShrink: 0, alignSelf: 'flex-start' }}
          />
        )}

        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <IconButton onClick={() => navigate(-1)} size="small">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" sx={{ fontWeight: 700, flexGrow: 1 }}>
              {movie.title}
            </Typography>
            <Tooltip title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
              <IconButton onClick={onToggleFavorite}>
                {isFavorite
                  ? <FavoriteIcon color="error" />
                  : <FavoriteBorderIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          {movie.tagline && (
            <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
              "{movie.tagline}"
            </Typography>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
            <Typography variant="body2" color="text.secondary">
              {movie.release_date?.slice(0, 4)}
            </Typography>
            {movie.runtime && (
              <Typography variant="body2" color="text.secondary">
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
              </Typography>
            )}
            <Rating value={movie.vote_average / 2} precision={0.5} size="small" readOnly />
            <Typography variant="body2" color="text.secondary">
              {movie.vote_average.toFixed(1)} / 10
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {movie.genres.map((g) => (
              <Chip key={g.id} label={g.name} size="small" color="primary" variant="outlined" />
            ))}
          </Box>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {movie.overview || 'Sin descripción disponible.'}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MovieDetailHero
