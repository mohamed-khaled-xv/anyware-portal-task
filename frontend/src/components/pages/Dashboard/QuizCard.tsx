import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  CardActions,
} from '@mui/material';
import { Quiz } from '../../../store/slices/quizSlice';
import { EventAvailable, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface QuizCardProps {
  quiz: Quiz;
  onEdit?: (quiz: Quiz) => void;
  onDelete?: (id: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = () => {
    return new Date(quiz.dueDate) < new Date();
  };

  return (
    <Card
      sx={{
        mb: 2,
        '&:hover': {
          boxShadow: 3,
        },
        transition: 'box-shadow 0.3s',
        borderLeft: isOverdue() ? '4px solid #f44336' : '4px solid #4caf50',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3">
              {quiz.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Course: {quiz.course}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Topic: {quiz.topic}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EventAvailable fontSize="small" color={isOverdue() ? 'error' : 'success'} />
            <Chip
              label={formatDate(quiz.dueDate)}
              size="small"
              color={isOverdue() ? 'error' : 'success'}
              variant="outlined"
            />
          </Box>
        </Box>
      </CardContent>
      {(onEdit || onDelete) && (
        <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
          {onEdit && (
            <IconButton
              size="small"
              color="primary"
              onClick={() => onEdit(quiz)}
              aria-label="edit quiz"
            >
              <EditIcon />
            </IconButton>
          )}
          {onDelete && (
            <IconButton
              size="small"
              color="error"
              onClick={() => onDelete(quiz._id)}
              aria-label="delete quiz"
            >
              <DeleteIcon />
            </IconButton>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default QuizCard;
