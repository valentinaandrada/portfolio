import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

const Layout = () => {


  return (
    <div className="flex min-h-screen bg-primary dark:bg-darkPrimary">
      <Navbar />
      <main className="md:flex w-full pr-8 md:p-0">
        <aside className=" md:h-full flex items-center justify-end md:justify-center my-20 md:m-0 md:ml-40">
          <Logo />
        </aside>
        <div className="flex-1 ml-16"> 
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
