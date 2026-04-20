import { useEffect, useState } from 'react'
import { moviesApi } from '../api/moviesApi'
import type { MovieDetail } from '../types/movie.types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggleFavorite } from '../store/moviesSlice'

type State =
  | { status: 'loading'; movie: null; error: null }
  | { status: 'succeeded'; movie: MovieDetail; error: null }
  | { status: 'failed'; movie: null; error: string }

const LOADING: State = { status: 'loading', movie: null, error: null }

export const useMovieDetail = (id: number) => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.movies.favorites)
  const [state, setState] = useState<State>(LOADING)

  const isFavorite = favorites.some((m) => m.id === id)

  useEffect(() => {
    let cancelled = false
    moviesApi
      .getById(id)
      .then(({ data }) => {
        if (!cancelled) setState({ status: 'succeeded', movie: data, error: null })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'failed', movie: null, error: 'No se pudo cargar la película' })
      })
    return () => { cancelled = true }
  }, [id])

  const handleToggleFavorite = () => {
    if (!state.movie) return
    const { movie } = state
    dispatch(
      toggleFavorite({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        genre_ids: movie.genres.map((g) => g.id),
        popularity: movie.popularity,
        adult: movie.adult,
        original_language: movie.original_language,
        original_title: movie.original_title,
        video: movie.video,
      })
    )
  }

  return { ...state, isFavorite, handleToggleFavorite }
}
