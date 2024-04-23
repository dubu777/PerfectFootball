import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const LayOutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOutPage;
