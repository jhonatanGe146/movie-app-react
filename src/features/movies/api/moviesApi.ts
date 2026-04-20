import tmdbClient from '@/api/tmdbClient'
import type { MovieDetail, MoviesResponse } from '../types/movie.types'

export const moviesApi = {
  getPopular: (page = 1) =>
    tmdbClient.get<MoviesResponse>('/movie/popular', { params: { page } }),

  search: (query: string, page = 1) =>
    tmdbClient.get<MoviesResponse>('/search/movie', { params: { query, page } }),

  getById: (id: number) =>
    tmdbClient.get<MovieDetail>(`/movie/${id}`),
}
