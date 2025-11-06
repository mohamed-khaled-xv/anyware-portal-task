import React from 'react';
import { Paper, Typography, Box, Button, CircularProgress, Alert } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import QuizCard from './QuizCard';
import { Quiz } from '../../../store/slices/quizSlice';
import { useTranslation } from 'react-i18next';

interface QuizzesSectionProps {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
  onAdd: () => void;
  onEdit: (quiz: Quiz) => void;
  onDelete: (id: string) => void;
}

const QuizzesSection: React.FC<QuizzesSectionProps> = ({
  quizzes,
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
          {t('quizzes')}
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
      ) : quizzes.length === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: 'left' }}>{t('noQuizzes')}</Typography>
      ) : (
        <Box sx={{ maxHeight: 600, overflow: 'auto' }}>
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz._id}
              quiz={quiz}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default QuizzesSection;
