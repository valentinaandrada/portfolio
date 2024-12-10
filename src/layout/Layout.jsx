import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-primary dark:bg-darkPrimary">
      <Navbar />
      <main className="md:flex w-full">
        <aside className="h-[30vh] md:h-full flex items-center justify-center ml-20 md:ml-40">
          <Logo />
        </aside>
        <div className="flex-1 pl-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
