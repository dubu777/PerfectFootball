import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import HomePage from '@/pages/Home/HomePage';
import LandingPage from '@/pages/Landing/LandingPage';
import MatchPage from '@/pages/Match/MatchPage';
import SignInPage from '@/pages/SignIn/SignInPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import SurveyPage from '@/pages/Survey/SurveyPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'landing',
        element: <LandingPage/>,
      },
      {
        path: 'signin',
        element: <SignInPage/>,
      },
      {
        path: 'signup',
        element: <SignUpPage/>,
      },
      {
        path: 'survey',
        element: <SurveyPage/>,
      },
      {
        path: 'match/:id',
        element: <MatchPage/>,
      },
    ],
  },

]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
