import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMainSection from "../../components/AdminMainSection";
import AdminMainProjects from "../../components/main/admin/AdminMainProjects";

const AdminProjects = () => {


  return (
    // <div>
    //   <h1>Admin Area</h1>
    //   <button onClick={handleLogout}>Logout</button>
    // </div>
    <>
      <Navbar ownerName="dashboard-admin" />
      <AdminMainSection>
        <AdminMainProjects/>
      </AdminMainSection>
      <Footer footerAccess="logout" />
    </>
  );
};

export default AdminProjects;
