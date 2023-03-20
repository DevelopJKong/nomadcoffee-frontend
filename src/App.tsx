import { gql, useQuery } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import { GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';

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
   const isLoggedIn = false;
   return (
      <>
         <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <RouterProvider router={isLoggedIn ? loginRouter : logoutRouter} />
         </ThemeProvider>
      </>
   );
}

export default App;
