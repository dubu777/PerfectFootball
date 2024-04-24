import Header from "@/components/Header/Header";
import { useLogInStore } from "@/store/temp";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SignInButton } from "../SignIn/SignInPage.styles";

const LayOutPage = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const { isLogIn, handleLogIn } = useLogInStore();
  return (
    <>
    {isLogIn && <Header />} 
    {/* <SignInButton onClick={handleLogIn}>로그인버튼</SignInButton> */}
      <Outlet />
    </>
  );
};

export default LayOutPage;
