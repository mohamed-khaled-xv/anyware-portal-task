import React from 'react';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Dashboard as DashboardIcon, Logout as LogoutIcon } from '@mui/icons-material';

interface AuthenticatedActionsProps {
  onNavigateToDashboard: () => void;
  onLogout: () => void;
}

const AuthenticatedActions: React.FC<AuthenticatedActionsProps> = ({
  onNavigateToDashboard,
  onLogout,
}) => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      justifyContent="center"
    >
      <Button
        variant="contained"
        size="large"
        startIcon={<DashboardIcon />}
        onClick={onNavigateToDashboard}
        sx={{
          minWidth: 180,
          py: 1.5,
          fontSize: '1rem',
          fontWeight: 600,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          textTransform: 'none',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
          },
        }}
      >
        Go to {t('dashboard')}
      </Button>
      <Button
        variant="outlined"
        size="large"
        endIcon={<LogoutIcon />}
        onClick={onLogout}
        sx={{
          minWidth: 180,
          py: 1.5,
          fontSize: '1rem',
          fontWeight: 600,
          borderColor: '#667eea',
          color: '#667eea',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#764ba2',
            color: '#764ba2',
            backgroundColor: 'rgba(102, 126, 234, 0.05)',
          },
        }}
      >
        {t('logout')}
      </Button>
    </Stack>
  );
};

export default AuthenticatedActions;
