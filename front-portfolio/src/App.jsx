import { lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
const AuthenticatedApp = lazy(() => import("./components/AuthenticatedApp"));
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import { setTheme } from "./contexts/LightContext";
import './scss/index.scss';
import { GameProvider } from "./contexts/GameContext";



const App = () => {
  const { user } = useAuth();
  const { themes } = setTheme();

  return (
    <Router>
      <GameProvider>
        <div className={`app ${themes.bgThemeSecondary} transition-02s`}>
          <div className={`root ${themes.bgThemeMain} ${themes.txtTheme} transition-02s`}>
            {!user ? <UnauthenticatedApp /> : <AuthenticatedApp />}
          </div>
        </div>
      </GameProvider>
    </Router>
  );
};

export default App;
