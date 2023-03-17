import { Outlet, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import ErrorComponent from './components/error.component';

const Router = () => {
   const logoutRouter = createBrowserRouter([
      {
         path: routes.login,
         element: (
            <div>
               <Outlet />
            </div>
         ),
         children: [
            {
               index: true,
               element: <div>Login</div>,
               errorElement: <ErrorComponent />,
            },
         ],
      },
   ]);

   const loginRouter = createBrowserRouter([
      {
         path: routes.home,
         element: (
            <div>
               <Outlet />
            </div>
         ),
         children: [
            {
               index: true,
               element: <div>Home</div>,
               errorElement: <ErrorComponent />,
            },
         ],
      },
   ]);

   return { loginRouter, logoutRouter };
};

export default Router;
