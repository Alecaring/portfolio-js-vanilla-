import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './scss/index.scss';
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/LightContext.jsx';
import { ContactProvider } from './contexts/ContactContext.jsx';
import { ProjectProvider } from './contexts/ProjectContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <ContactProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ContactProvider>
      </ProjectProvider>
    </AuthProvider>
  </StrictMode>,
)
