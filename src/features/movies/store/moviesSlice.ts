import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { moviesApi } from '../api/moviesApi'
import type { Movie } from '../types/movie.types'

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

interface MoviesState {
  popular: {
    data: Movie[]
    page: number
    totalPages: number
    status: RequestStatus
    error: string | null
  }
  search: {
    query: string
    data: Movie[]
    page: number
    totalPages: number
    status: RequestStatus
    error: string | null
  }
  favorites: Movie[]
}

const initialState: MoviesState = {
  popular: {
    data: [],
    page: 1,
    totalPages: 1,
    status: 'idle',
    error: null,
  },
  search: {
    query: '',
    data: [],
    page: 1,
    totalPages: 1,
    status: 'idle',
    error: null,
  },
  favorites: [],
}

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async (page: number, { rejectWithValue }) => {
    try {
      const { data } = await moviesApi.getPopular(page)
      return data
    } catch {
      return rejectWithValue('Error al cargar películas populares')
    }
  }
)

export const searchMovies = createAsyncThunk(
  'movies/search',
  async ({ query, page }: { query: string; page: number }, { rejectWithValue }) => {
    try {
      const { data } = await moviesApi.search(query, page)
      return data
    } catch {
      return rejectWithValue('Error al buscar películas')
    }
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.search.query = action.payload
      if (!action.payload) {
        state.search.data = []
        state.search.page = 1
        state.search.totalPages = 1
        state.search.status = 'idle'
      }
    },
    toggleFavorite(state, action: PayloadAction<Movie>) {
      const index = state.favorites.findIndex((m) => m.id === action.payload.id)
      if (index >= 0) {
        state.favorites.splice(index, 1)
      } else {
        state.favorites.push(action.payload)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.popular.status = 'loading'
        state.popular.error = null
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popular.status = 'succeeded'
        state.popular.data = action.payload.results
        state.popular.page = action.payload.page
        state.popular.totalPages = action.payload.total_pages
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.popular.status = 'failed'
        state.popular.error = action.payload as string
      })
      .addCase(searchMovies.pending, (state) => {
        state.search.status = 'loading'
        state.search.error = null
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.search.status = 'succeeded'
        state.search.data = action.payload.results
        state.search.page = action.payload.page
        state.search.totalPages = action.payload.total_pages
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.search.status = 'failed'
        state.search.error = action.payload as string
      })
  },
})

export const { setSearchQuery, toggleFavorite } = moviesSlice.actions
export default moviesSlice.reducer
