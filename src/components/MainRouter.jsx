import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const MainRouter = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-fvh sm:h-screen bg-primary pb-16 sm:pb-0">
      <Navbar
        routes={[
          [ 'Home', () => { navigate('/')} ],
          [ 'Experience', () => { navigate('/experience')} ],
          [ 'Contact', () => { navigate('/contact')} ],
        ]}
      />
      <Outlet />
    </div>
  )
}
export default MainRouter;