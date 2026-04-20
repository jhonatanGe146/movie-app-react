import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchPopularMovies, searchMovies, setSearchQuery, toggleFavorite } from '../store/moviesSlice'
import type { Movie } from '../types/movie.types'

export const useMovies = () => {
  const dispatch = useAppDispatch()
  const { popular, search, favorites } = useAppSelector((state) => state.movies)

  const isSearching = search.query.trim().length > 0

  useEffect(() => {
    if (!isSearching && popular.status === 'idle') {
      dispatch(fetchPopularMovies(1))
    }
  }, [dispatch, isSearching, popular.status])

  const handleSearch = useCallback((query: string) => {
    dispatch(setSearchQuery(query))
    if (query.trim()) {
      dispatch(searchMovies({ query, page: 1 }))
    }
  }, [dispatch])

  const handlePageChange = (page: number) => {
    if (isSearching) {
      dispatch(searchMovies({ query: search.query, page }))
    } else {
      dispatch(fetchPopularMovies(page))
    }
  }

  const handleToggleFavorite = (movie: Movie) => {
    dispatch(toggleFavorite(movie))
  }

  const isFavorite = (id: number) => favorites.some((m) => m.id === id)

  const movies = isSearching ? search.data : popular.data
  const status = isSearching ? search.status : popular.status
  const error = isSearching ? search.error : popular.error
  const page = isSearching ? search.page : popular.page
  const totalPages = isSearching ? search.totalPages : popular.totalPages

  return {
    movies,
    status,
    error,
    page,
    totalPages,
    searchQuery: search.query,
    isSearching,
    favorites,
    isFavorite,
    handleSearch,
    handlePageChange,
    handleToggleFavorite,
  }
}
