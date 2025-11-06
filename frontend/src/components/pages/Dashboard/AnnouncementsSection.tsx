import React from 'react';
import { Paper, Typography, Box, Button, CircularProgress, Alert } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import AnnouncementCard from './AnnouncementCard';
import { Announcement } from '../../../store/slices/announcementSlice';
import { useTranslation } from 'react-i18next';

interface AnnouncementsSectionProps {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
  onAdd: () => void;
  onEdit: (announcement: Announcement) => void;
  onDelete: (id: string) => void;
}

const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({
  announcements,
  loading,
  error,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const { t } = useTranslation();

  return (
    <Paper elevation={2} sx={{ p: 3, minHeight: 400 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'left' }}>
          {t('announcements')}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAdd}
          size="small"
        >
          Add
        </Button>
      </Box>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : announcements.length === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: 'left' }}>{t('noAnnouncements')}</Typography>
      ) : (
        <Box sx={{ maxHeight: 600, overflow: 'auto' }}>
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement._id}
              announcement={announcement}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default AnnouncementsSection;
