import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Anyware Student Portal',
      login: 'Login',
      logout: 'Logout',
      dashboard: 'Dashboard',
      announcements: 'Announcements',
      quizzes: 'Quizzes',
      exams: 'Exams',
      discussion: 'Discussion',
      qna: 'Q&A',
      grades: 'Grades',
      people: 'People',
      noAnnouncements: 'No announcements available',
      noQuizzes: 'No quizzes available',
    },
  },
  ar: {
    translation: {
      welcome: 'مرحبا بك في لوحة تحكم الطالب',
      login: 'تسجيل الدخول',
      logout: 'تسجيل الخروج',
      dashboard: 'لوحة التحكم',
      announcements: 'الإعلانات',
      quizzes: 'الاختبارات',
      exams: 'الامتحانات',
      discussion: 'المناقشة',
      qna: 'أسئلة وأجوبة',
      grades: 'الدرجات',
      people: 'الأشخاص',
      noAnnouncements: 'لا توجد إعلانات متاحة',
      noQuizzes: 'لا توجد اختبارات متاحة',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
