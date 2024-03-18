import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {

  return (
    <>
      <Navbar  />
      <div className="common-container">
        <Outlet  />
      </div>
    </>
  );
};

export default RootLayout;
