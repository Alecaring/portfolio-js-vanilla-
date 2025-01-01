import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import MainLogin from "../components/main/MainLogin";

const LogIn = () => {

  return (
    // <section className="container-login-page">
    //   <h1>Log In</h1>
    //   <button onClick={handleLogin}>Login</button>
    // </section>
    <>
    <Navbar ownerName="alessio-caringella" />
    <MainSection mainLogin={<MainLogin/>} />
    <Footer footerAccess="_admin-area" />
    </>
  );
};

export default LogIn;
