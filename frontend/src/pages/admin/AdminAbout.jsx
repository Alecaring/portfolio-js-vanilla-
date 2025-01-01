import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMainSection from "../../components/AdminMainSection";
import AdminMainAbout from "../../components/main/admin/AdminMainAbout";

const AdminAbout = () => {
  

  return (
    <>
    <Navbar ownerName="dashboard-admin" />
    <AdminMainSection>
        <AdminMainAbout/>
    </AdminMainSection>
    <Footer footerAccess="logout" />
    </>
  );
};

export default AdminAbout;
