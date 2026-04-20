export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  popularity: number
  adult: boolean
  original_language: string
  original_title: string
  video: boolean
}

export interface MovieDetail extends Omit<Movie, 'genre_ids'> {
  genres: Genre[]
  runtime: number | null
  budget: number
  revenue: number
  status: string
  tagline: string
  homepage: string
  production_companies: ProductionCompany[]
  spoken_languages: SpokenLanguage[]
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  name: string
  logo_path: string | null
  origin_country: string
}

export interface SpokenLanguage {
  iso_639_1: string
  name: string
}

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type MoviesResponse = PaginatedResponse<Movie>
