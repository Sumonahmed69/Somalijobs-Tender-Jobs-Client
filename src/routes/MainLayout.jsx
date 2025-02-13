import { Outlet } from "react-router";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>
    
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
