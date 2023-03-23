import { Navigate, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/error.component';
import { routes } from './common/constants/routes.constant';
import Root from './pages/root.page';
import Login from './pages/logout/login.page';
import SignUp from './pages/logout/sign-up.page';
import Home from './pages/home.page';
import Main from './pages/login/main.page';
import NotFound from './pages/error/not-found.page';
import ServerError from './pages/error/server-error.page';
import RootMain from './pages/login/root-main.page';
import AddShop from './pages/login/shop/add-shop.page';
import EditShop from './pages/login/shop/edit-shop.page';
import ShopDetail from './pages/login/shop/shop-detail.page';

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
            {
               path: routes.logout.withOut,
               element: <NotFound />,
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
            {
               path: routes.logout.login,
               element: <Navigate to={routes.login.main} />,
               errorElement: <ErrorComponent />,
            },
            {
               path: routes.login.main,
               element: <RootMain />,
               children: [
                  {
                     index: true,
                     element: <Main />,
                     errorElement: <ErrorComponent />,
                  },
                  {
                     path: routes.login.addShop,
                     element: <AddShop />,
                     errorElement: <ErrorComponent />,
                  },
                  {
                     path: routes.login.editShop.route,
                     element: <EditShop />,
                     errorElement: <ErrorComponent />,
                  },
                  {
                     path: routes.login.shopDetail.route,
                     element: <ShopDetail />,
                     errorElement: <ErrorComponent />,
                  },
               ],
               errorElement: <ErrorComponent />,
            },
            {
               path: routes.login.withOut,
               element: <NotFound />,
               errorElement: <ErrorComponent />,
            },
         ],
         errorElement: <ServerError />,
      },
   ]);

   return { loginRouter, logoutRouter };
};

export default Router;
