import { Box, Card, Skeleton } from "@mui/material";

const MovieCardSkeleton = () => {
  return (
    <Card
      sx={{
        height: 420,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: 6, right: 6 }}>
        <Skeleton animation="wave" variant="circular" width={28} height={28} />
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Skeleton animation="wave" variant="rounded" width="100%" height={90} />
    </Card>
  );
};

export default MovieCardSkeleton;
