import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import { setTheme } from "./contexts/LightContext";


const App = () => {
  const { user } = useAuth();
  const { isLight } = setTheme();

  return (
    <Router>
      <div className={`app ${isLight ? "bg-white" : "bg-black"}`}>
        <div className={`root ${isLight ? "bg-white text-dark-blue" : "bg-dark-blue text-white"}`}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
      </div>
    </Router>
  );
};

export default App;
