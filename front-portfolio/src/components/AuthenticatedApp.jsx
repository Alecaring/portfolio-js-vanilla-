import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Footer from "./Footer";

const AuthenticatedApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/home" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default AuthenticatedApp;
