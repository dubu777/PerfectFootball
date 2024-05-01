import { Suspense, useState } from "react";
import LandingPage from "./pages/Landing/LandingPage";
import LayOutPage from "./pages/LayOut/LayOutPage";

function App() {
  const [isLogin, _] = useState(!!localStorage.getItem('username'));

  return (
    <Suspense fallback={<p>로딩중</p>}>
    {isLogin ? <LayOutPage /> : <LandingPage />}
    </Suspense>
  )
}

export default App
