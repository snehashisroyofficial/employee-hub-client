import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Headers from "../Shared/Navbar/Headers";

const Root = () => {
  const location = useLocation();
  const noNavFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {noNavFooter || <Headers />}
      <Outlet />
      {noNavFooter || <Footer />}
    </div>
  );
};

export default Root;
