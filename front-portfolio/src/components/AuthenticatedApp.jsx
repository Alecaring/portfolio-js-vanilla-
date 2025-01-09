import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const AuthenticatedApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
