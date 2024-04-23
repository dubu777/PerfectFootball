import { Suspense, useState } from "react";
import LandingPage from "./pages/Landing/LandingPage";
import LayOutPage from "./pages/LayOut/LayOutPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Suspense fallback={<p>로딩중</p>}>
    {isLogin ? <LayOutPage /> : <LandingPage />}
    </Suspense>
  )
}

export default App
