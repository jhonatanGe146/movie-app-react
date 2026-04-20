import { useState, useEffect } from 'react'
import { Box, Pagination, TextField, Typography, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useMovies } from '@/features/movies/hooks/useMovies'
import { useDebounce } from '@/hooks/useDebounce'
import MovieGrid from '@/features/movies/components/MovieGrid'

const HomePage = () => {
  const [inputValue, setInputValue] = useState('')
  const debouncedQuery = useDebounce(inputValue, 500)
  const { movies, status, error, page, totalPages, isFavorite, handleSearch, handlePageChange, handleToggleFavorite } = useMovies()

  useEffect(() => {
    handleSearch(debouncedQuery)
  }, [debouncedQuery])

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {inputValue ? `Resultados para "${inputValue}"` : 'Películas populares'}
      </Typography>

      <TextField
        fullWidth
        placeholder="Buscar películas..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ mb: 4 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <MovieGrid
        movies={movies}
        status={status}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />

      {totalPages > 1 && status === 'succeeded' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Pagination
            count={totalPages > 500 ? 500 : totalPages}
            page={page}
            onChange={(_, value) => handlePageChange(value)}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </Box>
  )
}

export default HomePage
