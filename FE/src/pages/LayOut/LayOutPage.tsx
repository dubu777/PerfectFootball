import Header from "@/components/Header/Header";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const LayOutPage = () => {
  const [isLogIn, _] = useState(!!localStorage.getItem("username"));
  const location = useLocation();
  const showHeader = isLogIn && location.pathname !== "/survey";

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
    </>
  );
};

export default LayOutPage;
