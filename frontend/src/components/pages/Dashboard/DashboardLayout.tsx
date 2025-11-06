import React from 'react';
import { Box, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';

interface DashboardLayoutProps {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  onSidebarClose: () => void;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  sidebarOpen,
  onSidebarToggle,
  onSidebarClose,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onMenuClick={onSidebarToggle} />
      <Sidebar open={sidebarOpen} onClose={onSidebarClose} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: isMobile ? 0 : '240px',
          width: isMobile ? '100%' : 'calc(100% - 240px)',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {React.Children.map(children, (child, index) => (
              <Grid item xs={12} md={6} key={index}>
                {child}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
