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
import { createQuiz, updateQuiz } from '../../../store/slices/quizSlice';
import { Quiz } from '../../../store/slices/quizSlice';

interface QuizFormProps {
  open: boolean;
  onClose: () => void;
  quiz?: Quiz | null;
}

const QuizForm: React.FC<QuizFormProps> = ({ open, onClose, quiz }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: quiz?.title || '',
    course: quiz?.course || '',
    topic: quiz?.topic || '',
    dueDate: quiz?.dueDate ? new Date(quiz.dueDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (quiz) {
      await dispatch(updateQuiz({
        id: quiz._id,
        data: { ...formData, dueDate: new Date(formData.dueDate).toISOString() },
      }));
    } else {
      await dispatch(createQuiz({
        ...formData,
        dueDate: new Date(formData.dueDate).toISOString(),
      }));
    }
    
    onClose();
  };

  React.useEffect(() => {
    if (quiz) {
      setFormData({
        title: quiz.title,
        course: quiz.course,
        topic: quiz.topic,
        dueDate: new Date(quiz.dueDate).toISOString().split('T')[0],
      });
    } else {
      setFormData({
        title: '',
        course: '',
        topic: '',
        dueDate: new Date().toISOString().split('T')[0],
      });
    }
  }, [quiz, open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {quiz ? 'Edit Quiz' : 'Create New Quiz'}
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
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Due Date"
              name="dueDate"
              type="date"
              value={formData.dueDate}
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
            {quiz ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default QuizForm;
