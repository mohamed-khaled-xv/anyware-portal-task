import React from 'react';
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Login as LoginIcon } from '@mui/icons-material';

interface LoginButtonProps {
  onLogin: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onLogin }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Button
        variant="contained"
        size="large"
        onClick={onLogin}
        startIcon={<LoginIcon />}
        sx={{
          minWidth: 250,
          py: 1.5,
          fontSize: '1.1rem',
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
        {t('login')}
      </Button>
    </Box>
  );
};

export default LoginButton;
