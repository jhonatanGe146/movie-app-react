import { Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import type { Movie } from "../types/movie.types";

interface Props {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (movie: Movie) => void;
}

const SKELETON_COUNT = 18

const MovieGrid = ({ movies, status, error, isFavorite, onToggleFavorite }: Props) => {
  if (status === "loading") {
    return (
      <Grid container spacing={2}>
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <Grid key={i} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <MovieCardSkeleton />
          </Grid>
        ))}
      </Grid>
    )
  }

  if (status === "failed") {
    return (
      <Typography color="error">
        {error ?? "Ocurrió un error inesperado"}
      </Typography>
    );
  }

  if (status === "succeeded" && movies.length === 0) {
    return (
      <Typography color="text.secondary">
        No se encontraron películas
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
          <MovieCard
            movie={movie}
            isFavorite={isFavorite(movie.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
