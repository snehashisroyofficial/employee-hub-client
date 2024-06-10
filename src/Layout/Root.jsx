import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Headers from "../Shared/Navbar/Headers";

const Root = () => {
  const location = useLocation();
  const noNavFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div className="font-body">
      <div className="z-20">{noNavFooter || <Headers />}</div>
      <div className="max-w-6xl min-h-[calc(100vh-332px)] mx-auto">
        <Outlet />
      </div>
      {noNavFooter || <Footer />}
    </div>
  );
};

export default Root;
