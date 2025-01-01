import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMainSection from "../../components/AdminMainSection";
import AdminMainHome from "../../components/main/admin/AdminMainHome";

const AdminHome = () => {


  return (
    // <div>
    //   <h1>Admin Area</h1>
    //   <button onClick={handleLogout}>Logout</button>
    // </div>
    <>
      <Navbar ownerName="dashboard-admin" />
      <AdminMainSection>
        <AdminMainHome />
      </AdminMainSection>
      <Footer footerAccess="logout" />
    </>
  );
};

export default AdminHome;
