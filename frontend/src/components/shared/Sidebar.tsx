import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Quiz as QuizIcon,
  School as ExamIcon,
  Forum as DiscussionIcon,
  QuestionAnswer as QnaIcon,
  Grade as GradeIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: t('dashboard'), icon: <DashboardIcon />, path: '/dashboard' },
    { text: t('quizzes'), icon: <QuizIcon />, path: '/quizzes' },
    { text: t('exams'), icon: <ExamIcon />, path: '/exams' },
    { text: t('discussion'), icon: <DiscussionIcon />, path: '/discussion' },
    { text: t('qna'), icon: <QnaIcon />, path: '/qna' },
    { text: t('grades'), icon: <GradeIcon />, path: '/grades' },
    { text: t('people'), icon: <PeopleIcon />, path: '/people' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const drawerWidth = 240;

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <List sx={{ py: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => handleNavigate(item.path)}
              sx={{
                mx: 1,
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                color: 'text.primary',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid transparent',
                
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                  transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 0,
                },

                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.08)',
                  borderColor: 'rgba(102, 126, 234, 0.3)',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.15)',
                  
                  '&::before': {
                    left: '0%',
                  },
                  
                  '& .MuiListItemIcon-root': {
                    color: '#667eea',
                    transform: 'scale(1.15) rotate(10deg)',
                  },
                  
                  '& .MuiListItemText-primary': {
                    color: '#667eea',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: 'text.secondary',
                  minWidth: 40,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiTypography-root': {
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              mt: 8,
              height: 'calc(100vh - 64px)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
