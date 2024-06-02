import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Headers from "../Shared/Navbar/Headers";

const Root = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
