import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { createAnnouncement, updateAnnouncement } from '../../../store/slices/announcementSlice';
import { Announcement } from '../../../store/slices/announcementSlice';

interface AnnouncementFormProps {
  open: boolean;
  onClose: () => void;
  announcement?: Announcement | null;
}

const AnnouncementForm: React.FC<AnnouncementFormProps> = ({ open, onClose, announcement }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: announcement?.title || '',
    description: announcement?.description || '',
    author: announcement?.author || '',
    date: announcement?.date ? new Date(announcement.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (announcement) {
      // Update existing announcement
      await dispatch(updateAnnouncement({
        id: announcement._id,
        data: { ...formData, date: new Date(formData.date).toISOString() },
      }));
    } else {
      // Create new announcement
      await dispatch(createAnnouncement({
        ...formData,
        date: new Date(formData.date).toISOString(),
      }));
    }
    
    onClose();
  };

  React.useEffect(() => {
    if (announcement) {
      setFormData({
        title: announcement.title,
        description: announcement.description,
        author: announcement.author,
        date: new Date(announcement.date).toISOString().split('T')[0],
      });
    } else {
      setFormData({
        title: '',
        description: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
      });
    }
  }, [announcement, open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {announcement ? 'Edit Announcement' : 'Create New Announcement'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              label="Author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {announcement ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AnnouncementForm;
