import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Editor from "../pages/Editor";
const Login = lazy(() => import("../pages/Login"));
const Navbar = lazy(() => import("./Navbar"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Footer = lazy(() => import("./Footer"));


const UnauthenticatedApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/editor/:repoName" element={<Editor />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default UnauthenticatedApp;
