import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import { setTheme } from "./contexts/LightContext";


const App = () => {
  const { user } = useAuth();
  const { themes } = setTheme();

  return (
    <Router>
      <div className={`app ${themes.bgThemeSecondary} transition-02s`}>
        <div className={`root ${themes.bgThemeMain} ${themes.txtTheme} transition-02s`}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
      </div>
    </Router>
  );
};

export default App;
