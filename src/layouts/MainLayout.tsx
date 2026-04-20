import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from '@/components/ui/Navbar'

const MainLayout = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Box component="main" sx={{ pt: 3, pb: 6, px: { xs: 2, md: 4 } }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
