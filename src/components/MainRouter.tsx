// import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primaryDark bg-opacity-50 rounded-lg flex justify-center items-center h-16 pointer-events-auto box-border z-50 backdrop-blur-md">
      <Link className="mx-2 sm:mx-4 text-creamDark" to="/">
        Home
      </Link>
      <Link className="mx-2 sm:mx-4 text-creamDark" to="/experience">
        Experience
      </Link>
      <Link className="mx-2 sm:mx-4 text-creamDark" to="/contact">
        Contact
      </Link>
    </div>
  );
};

const MainRouter = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainRouter;
