import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/LightContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
