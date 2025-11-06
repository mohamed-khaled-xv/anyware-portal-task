import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/pages/Dashboard/DashboardLayout';
import AnnouncementsSection from '../components/pages/Dashboard/AnnouncementsSection';
import QuizzesSection from '../components/pages/Dashboard/QuizzesSection';
import DeleteConfirmDialog from '../components/pages/Dashboard/DeleteConfirmDialog';
import AnnouncementForm from '../components/pages/Dashboard/AnnouncementForm';
import QuizForm from '../components/pages/Dashboard/QuizForm';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchAnnouncements, deleteAnnouncement, Announcement } from '../store/slices/announcementSlice';
import { fetchQuizzes, deleteQuiz, Quiz } from '../store/slices/quizSlice';

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [announcementFormOpen, setAnnouncementFormOpen] = useState(false);
  const [quizFormOpen, setQuizFormOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'announcement' | 'quiz'; id: string } | null>(null);
  
  const { announcements, loading: announcementsLoading, error: announcementsError } = 
    useAppSelector((state) => state.announcements);
  const { quizzes, loading: quizzesLoading, error: quizzesError } = 
    useAppSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Announcement handlers
  const handleCreateAnnouncement = () => {
    setSelectedAnnouncement(null);
    setAnnouncementFormOpen(true);
  };

  const handleEditAnnouncement = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
    setAnnouncementFormOpen(true);
  };

  const handleDeleteAnnouncement = (id: string) => {
    setDeleteTarget({ type: 'announcement', id });
    setDeleteConfirmOpen(true);
  };

  // Quiz handlers
  const handleCreateQuiz = () => {
    setSelectedQuiz(null);
    setQuizFormOpen(true);
  };

  const handleEditQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setQuizFormOpen(true);
  };

  const handleDeleteQuiz = (id: string) => {
    setDeleteTarget({ type: 'quiz', id });
    setDeleteConfirmOpen(true);
  };

  // Confirm delete
  const handleConfirmDelete = async () => {
    if (deleteTarget) {
      if (deleteTarget.type === 'announcement') {
        await dispatch(deleteAnnouncement(deleteTarget.id));
      } else {
        await dispatch(deleteQuiz(deleteTarget.id));
      }
    }
    setDeleteConfirmOpen(false);
    setDeleteTarget(null);
  };

  return (
    <DashboardLayout
      sidebarOpen={sidebarOpen}
      onSidebarToggle={handleSidebarToggle}
      onSidebarClose={() => setSidebarOpen(false)}
    >
      <AnnouncementsSection
        announcements={announcements}
        loading={announcementsLoading}
        error={announcementsError}
        onAdd={handleCreateAnnouncement}
        onEdit={handleEditAnnouncement}
        onDelete={handleDeleteAnnouncement}
      />

      <QuizzesSection
        quizzes={quizzes}
        loading={quizzesLoading}
        error={quizzesError}
        onAdd={handleCreateQuiz}
        onEdit={handleEditQuiz}
        onDelete={handleDeleteQuiz}
      />

      <AnnouncementForm
        open={announcementFormOpen}
        onClose={() => setAnnouncementFormOpen(false)}
        announcement={selectedAnnouncement}
      />

      <QuizForm
        open={quizFormOpen}
        onClose={() => setQuizFormOpen(false)}
        quiz={selectedQuiz}
      />

      <DeleteConfirmDialog
        open={deleteConfirmOpen}
        type={deleteTarget?.type || null}
        onClose={() => setDeleteConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </DashboardLayout>
  );
};

export default DashboardPage;
