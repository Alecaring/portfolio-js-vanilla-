import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import { lazy, useState } from 'react';
const ProjectsPage = lazy(() => import('./pages/Projects'))
// import ProjectsPage from './pages/Projects';
import ContactsPage from './pages/Contacts';
import LogIn from './pages/LogIn';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import AdminHome from './pages/admin/AdminHome';
import AdminAbout from './pages/admin/AdminAbout';
import AdminProjects from './pages/admin/AdminProjects';


function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contacts' element={<ContactsPage />} />

            <Route path='/login' element={<LogIn />} />

            {/* rotte protette */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminHome/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/about"
              element={
                <ProtectedRoute>
                  <AdminAbout/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/projects"
              element={
                <ProtectedRoute>
                  <AdminProjects/>
                </ProtectedRoute>
              }
            />

          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
