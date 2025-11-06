import React from 'react';
import { Paper, Typography, Box, Stack, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { School as SchoolIcon, EmojiEvents as AchievementIcon } from '@mui/icons-material';

interface WelcomeCardProps {
  children: React.ReactNode;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={8}
      sx={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
        p: { xs: 3, md: 6 },
        textAlign: 'center',
        borderRadius: 3,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          }}
        >
          <SchoolIcon sx={{ fontSize: 48, color: 'white' }} />
        </Box>
      </Box>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 800,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
        }}
      >
        {t('welcome')}
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 3, fontWeight: 500, lineHeight: 1.6 }}
      >
        Access your quizzes, announcements, and academic information
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        <Chip
          icon={<SchoolIcon />}
          label="Academic Tools"
          sx={{
            background: 'rgba(102, 126, 234, 0.1)',
            color: '#667eea',
            fontWeight: 600,
            py: 3,
            px: 2,
          }}
        />
        <Chip
          icon={<AchievementIcon />}
          label="Track Progress"
          sx={{
            background: 'rgba(118, 75, 162, 0.1)',
            color: '#764ba2',
            fontWeight: 600,
            py: 3,
            px: 2,
          }}
        />
      </Stack>

      <Box sx={{ mt: 4 }}>
        {children}
      </Box>
    </Paper>
  );
};

export default WelcomeCard;
