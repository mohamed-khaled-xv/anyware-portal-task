import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from '../components/shared/Header';
import Sidebar from '../components/shared/Sidebar';

const ExamsPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { xs: 0, md: '240px' },
          width: { xs: '100%', md: 'calc(100% - 240px)' },
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h4" gutterBottom>
            Exams
          </Typography>
          <Typography color="text.secondary">
            This is the Exams page.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ExamsPage;
