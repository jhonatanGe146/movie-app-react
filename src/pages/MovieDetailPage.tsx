import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "@/features/movies/hooks/useMovieDetail";
import MovieDetailHero from "@/features/movies/components/MovieDetailHero";
import MovieDetailSkeleton from "@/features/movies/components/MovieDetailSkeleton";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { movie, status, error, isFavorite, handleToggleFavorite } =
    useMovieDetail(Number(id));

  if (status === "loading") {
    return (
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <MovieDetailSkeleton />
      </Box>
    );
  }

  if (status === "failed") {
    return <Typography color="error">{error}</Typography>;
  }

  if (!movie) return null;

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <MovieDetailHero
        movie={movie}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </Box>
  );
};

export default MovieDetailPage;
