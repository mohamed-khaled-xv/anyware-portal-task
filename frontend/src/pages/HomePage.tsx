import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import WelcomeCard from '../components/pages/Home/WelcomeCard';
import LoginButton from '../components/pages/Home/LoginButton';
import AuthenticatedActions from '../components/pages/Home/AuthenticatedActions';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login, logout } from '../store/slices/authSlice';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login());
    navigate('/dashboard');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <WelcomeCard>
            {!isAuthenticated ? (
              <LoginButton onLogin={handleLogin} />
            ) : (
              <AuthenticatedActions
                onNavigateToDashboard={handleGoToDashboard}
                onLogout={handleLogout}
              />
            )}
          </WelcomeCard>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
