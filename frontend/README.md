# Anyware Student Dashboard - Frontend

This is the frontend application for the Anyware Student Dashboard, built with **React**, **TypeScript**, **Redux Toolkit**, and **Material-UI**.

## 🚀 Features

- **Authentication System** - Simple login/logout without credentials
- **Protected Routes** - Dashboard accessible only to logged-in users
- **Higher Order Component (HOC)** - `requireAuth` for route protection
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Material-UI** - Modern, accessible UI components
- **Redux Toolkit** - State management for auth, announcements, and quizzes
- **i18n Support** - Internationalization ready (English and Arabic included)
- **TypeScript** - Type safety throughout the application
- **Testing** - Unit and integration tests with Vitest and React Testing Library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running on http://localhost:5000

## 🛠️ Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (or use the existing one):
```env
VITE_API_URL=http://localhost:5000/api
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The app will start on http://localhost:3000

### Production Build
```bash
npm run build
npm run preview
```

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 📱 Features Breakdown

### Authentication
- **Login Button** - No credentials required, simple toggle authentication
- **requireAuth HOC** - Protects the Dashboard route
- **Persistent Auth** - Uses localStorage to maintain login state

### Dashboard
- **Sidebar Navigation** - Links to different sections (responsive on mobile)
- **Announcements Section** - Displays all announcements with author and date
- **Quizzes Section** - Shows upcoming quizzes with due dates
- **Hover Effects** - Sidebar links change background on hover
- **Responsive Layout** - Drawer on mobile, permanent sidebar on desktop

### Internationalization (i18n)
- Prepared for multiple languages
- English and Arabic translations included
- Easy to add more languages

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── AnnouncementCard.tsx  # Reusable announcement component
│   │   ├── Header.tsx            # App bar with logout
│   │   ├── QuizCard.tsx          # Reusable quiz component
│   │   └── Sidebar.tsx           # Navigation sidebar
│   ├── hoc/
│   │   └── requireAuth.tsx       # HOC for route protection
│   ├── i18n/
│   │   └── config.ts             # i18n configuration
│   ├── pages/
│   │   ├── DashboardPage.tsx     # Protected dashboard
│   │   └── HomePage.tsx          # Landing/login page
│   ├── store/
│   │   ├── slices/
│   │   │   ├── announcementSlice.ts
│   │   │   ├── authSlice.ts
│   │   │   └── quizSlice.ts
│   │   ├── hooks.ts              # Typed Redux hooks
│   │   └── index.ts              # Store configuration
│   ├── tests/
│   │   ├── authSlice.test.ts
│   │   ├── DashboardPage.test.tsx
│   │   ├── HomePage.test.tsx
│   │   └── setup.ts
│   ├── App.tsx                   # App with routing
│   ├── main.tsx                  # Entry point
│   └── vite-env.d.ts            # Vite types
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## 🎨 Design & Responsiveness

### Breakpoints
- **Mobile**: < 900px (drawer sidebar, hamburger menu)
- **Tablet**: 900px - 1200px
- **Desktop**: > 1200px (permanent sidebar)

### Theme
- Primary Color: Blue (#1976d2)
- Secondary Color: Pink (#dc004e)
- Material-UI's responsive grid system
- Consistent spacing and elevation

### Hover Effects
All sidebar menu items feature:
- Background color change to primary on hover
- Text color change to white on hover
- Icon color change to white on hover
- Smooth transitions

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Material-UI (MUI)** - Component library
- **Axios** - HTTP client
- **i18next** - Internationalization
- **Vite** - Build tool
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## 📝 Code Written by Developer

All code in the `src/` directory was written specifically for this challenge:

### Core Components (100% custom)
- `requireAuth.tsx` - Higher Order Component for authentication
- `HomePage.tsx` - Landing and login page
- `DashboardPage.tsx` - Main dashboard with data fetching
- `Sidebar.tsx` - Navigation with hover effects
- `Header.tsx` - App bar with logout
- `AnnouncementCard.tsx` - Reusable announcement display
- `QuizCard.tsx` - Reusable quiz display with due date indicators

### State Management (100% custom)
- `authSlice.ts` - Authentication state
- `announcementSlice.ts` - Announcements with async thunks
- `quizSlice.ts` - Quizzes with async thunks
- `store/index.ts` - Redux store configuration
- `hooks.ts` - Typed useDispatch and useSelector

### Configuration & Tests (100% custom)
- `i18n/config.ts` - Internationalization setup
- All test files with custom test cases
- `App.tsx` - Routing and theme configuration

### Boilerplate Files (configured)
- `package.json` - Dependencies selected and configured
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite with proxy setup
- `vitest.config.ts` - Test configuration

## 🎯 Requirements Fulfilled

✅ Dashboard rendered only for logged-in users  
✅ Login/Logout button without username/password  
✅ `requireAuth` Higher Order Component implemented  
✅ Fully responsive design (mobile, tablet, desktop)  
✅ Reusable components throughout  
✅ Material-UI components used  
✅ Sidebar hover effects (background and foreground change to white)  
✅ i18n prepared for future translations  
✅ Unit and integration tests included  
✅ TypeScript used throughout  
✅ Redux for state management  

## ⏱️ Development Time

Estimated time spent: **6-7 hours**
- Project setup and configuration: 45 minutes
- Redux store and slices: 1 hour
- Authentication HOC and routing: 45 minutes
- UI components with Material-UI: 2 hours
- Responsive design and styling: 1 hour
- i18n setup: 30 minutes
- Testing: 1.5 hours
- Documentation: 30 minutes

## 🚀 Deployment

This app can be deployed to:
- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**
- **Heroku**

Before deploying, update the `VITE_API_URL` in `.env` to point to your deployed backend.

## 🐛 Known Issues

None at this time.

## 📄 License

ISC
