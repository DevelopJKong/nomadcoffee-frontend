import { gql, useQuery } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';

function App() {
   const HEALTH_CHECK = gql`
      query healthCheck {
         hi {
            ok
         }
      }
   `;
   useQuery(HEALTH_CHECK);
   const { logoutRouter, loginRouter } = Router();
   return (
      <>
         <RouterProvider router={logoutRouter} />
      </>
   );
}

export default App;
