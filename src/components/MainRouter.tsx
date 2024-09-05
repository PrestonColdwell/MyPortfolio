// import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainRouter = () => {
  // const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "100%", border: "1px solid black" }}>
      <Navbar />
      <div className="relative flex flex-col h-fvh sm:h-fill bg-primary pb-16 sm:pb-0">
        {/* <Navbar
        routes={[
          [ 'Home', () => { navigate('/')} ],
          [ 'Experience', () => { navigate('/experience')} ],
          [ 'Contact', () => { navigate('/contact')} ],
        ]}
      /> */}
        NOTE:: I am in the middle of recreating my portfolio - i know its ugly - dont judge...
        <Outlet />
      </div>
    </div>
  );
};
export default MainRouter;
