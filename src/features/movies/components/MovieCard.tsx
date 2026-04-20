import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import type { Movie } from "../types/movie.types";

const IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

interface Props {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: (movie: Movie) => void;
}

const MovieCard = ({ movie, isFavorite, onToggleFavorite }: Props) => {
  const navigate = useNavigate();
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE}/w342${movie.poster_path}`
    : null;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/movie/${movie.id}`)}
        sx={{ flexGrow: 1 }}
      >
        {posterUrl ? (
          <CardMedia
            component="img"
            image={posterUrl}
            alt={movie.title}
            sx={{ aspectRatio: "2/3", objectFit: "cover" }}
          />
        ) : (
          <Box
            sx={{
              aspectRatio: "2/3",
              bgcolor: "grey.800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="text.secondary" variant="body2">
              Sin imagen
            </Typography>
          </Box>
        )}
        <CardContent sx={{ pb: 1 }}>
          <Typography variant="body1" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {movie.release_date?.slice(0, 4) ?? "—"}
          </Typography>
          <Rating
            value={movie.vote_average / 2}
            precision={0.5}
            size="small"
            readOnly
            sx={{ display: "flex", flexDirection: "row", mt: 0.5 }}
          />
        </CardContent>
      </CardActionArea>

      <Tooltip
        title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        <IconButton
          onClick={() => onToggleFavorite(movie)}
          sx={{
            position: "absolute",
            top: 6,
            right: 6,
            bgcolor: "rgba(0,0,0,0.6)",
          }}
          size="small"
        >
          {isFavorite ? (
            <FavoriteIcon fontSize="small" color="error" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </Card>
  );
};

export default MovieCard;
