// import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-2 w-full bg-primaryDark bg-opacity-50 rounded-lg border-2 border-primaryDark flex justify-center items-center h-16">
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
    <>
      <div className="fixed w-full pointer-events-auto">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};
export default MainRouter;
