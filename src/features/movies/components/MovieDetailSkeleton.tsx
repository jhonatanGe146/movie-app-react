import { Box, Card, Skeleton } from '@mui/material'

const MovieDetailSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="rounded" width="100%" height={400} sx={{ mb: 3, bgcolor: 'grey.900' }} animation="wave" />

      <Box sx={{ display: 'flex', gap: 3 }}>
        <Skeleton variant="rounded" width={200} sx={{ aspectRatio: '2/3', flexShrink: 0 }} animation="wave" />

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Skeleton variant="text" width="70%" height={48} animation="wave" />
          <Skeleton variant="text" width="40%" height={24} animation="wave" />

          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            {[80, 70, 90].map((w, i) => (
              <Skeleton key={i} variant="rounded" width={w} height={28} animation="wave" />
            ))}
          </Box>

          <Card sx={{ mt: 1, p: 0 }}>
            <Skeleton variant="rounded" width="100%" height={100} animation="wave" />
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default MovieDetailSkeleton
