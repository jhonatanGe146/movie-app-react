import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '@/features/movies/store/moviesSlice'
import type { Movie } from '@/features/movies/types/movie.types'

const FAVORITES_KEY = 'movie-app:favorites'

const loadFavorites = (): Movie[] => {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY)
    return raw ? (JSON.parse(raw) as Movie[]) : []
  } catch {
    return []
  }
}

const saveFavorites = (favorites: Movie[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  preloadedState: {
    movies: {
      popular: { data: [], page: 1, totalPages: 1, status: 'idle', error: null },
      search: { query: '', data: [], page: 1, totalPages: 1, status: 'idle', error: null },
      favorites: loadFavorites(),
    },
  },
})

store.subscribe(() => {
  saveFavorites(store.getState().movies.favorites)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
