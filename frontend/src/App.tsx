import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { store } from './store';
import { requireAuth } from './hoc/requireAuth';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import QuizzesPage from './pages/QuizzesPage';
import ExamsPage from './pages/ExamsPage';
import DiscussionPage from './pages/DiscussionPage';
import QnaPage from './pages/QnaPage';
import GradesPage from './pages/GradesPage';
import PeoplePage from './pages/PeoplePage';
import './i18n/config';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const ProtectedDashboard = requireAuth(DashboardPage);
const ProtectedAnnouncements = requireAuth(AnnouncementsPage);
const ProtectedQuizzes = requireAuth(QuizzesPage);
const ProtectedExams = requireAuth(ExamsPage);
const ProtectedDiscussion = requireAuth(DiscussionPage);
const ProtectedQna = requireAuth(QnaPage);
const ProtectedGrades = requireAuth(GradesPage);
const ProtectedPeople = requireAuth(PeoplePage);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<ProtectedDashboard />} />
            <Route path="/announcements" element={<ProtectedAnnouncements />} />
            <Route path="/quizzes" element={<ProtectedQuizzes />} />
            <Route path="/exams" element={<ProtectedExams />} />
            <Route path="/discussion" element={<ProtectedDiscussion />} />
            <Route path="/qna" element={<ProtectedQna />} />
            <Route path="/grades" element={<ProtectedGrades />} />
            <Route path="/people" element={<ProtectedPeople />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
