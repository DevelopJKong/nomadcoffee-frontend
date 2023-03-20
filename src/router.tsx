import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/error.component';
import routes from './common/constants/routes.constant';
import Root from './pages/root.page';
import Login from './pages/logout/login.page';
import SignUp from './pages/logout/sign-up.page';
import Home from './pages/home.page';
import ServerError from './pages/error/server-error.page';

const Router = () => {
   const logoutRouter = createBrowserRouter([
      {
         path: routes.logout.home,
         element: <Root />,
         children: [
            {
               index: true,
               element: <Home />,
               errorElement: <ErrorComponent />,
            },
            {
               path: routes.logout.login,
               element: <Login />,
               errorElement: <ErrorComponent />,
            },
            {
               path: routes.logout.signUp,
               element: <SignUp />,
               errorElement: <ErrorComponent />,
            },
         ],
         errorElement: <ServerError />,
      },
   ]);

   const loginRouter = createBrowserRouter([
      {
         path: routes.login.home,
         element: <Root />,
         children: [
            {
               index: true,
               element: <Home />,
               errorElement: <ErrorComponent />,
            },
         ],
      },
   ]);

   return { loginRouter, logoutRouter };
};

export default Router;
