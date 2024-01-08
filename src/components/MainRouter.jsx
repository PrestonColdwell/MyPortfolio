import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const MainRouter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-primary">
      <Navbar
        routes={[
          [ 'About', () => { navigate('/')} ],
          [ 'Experience', () => { navigate('/experience')} ],
          [ 'Contact', () => { navigate('/contact')} ],
        ]}
      />
      <Outlet />
    </div>
  )
}
export default MainRouter;