import { gql, useQuery } from '@apollo/client';

function App() {
   const HEALTH_CHECK = gql`
      query healthCheck {
         hi {
            ok
         }
      }
   `;
   useQuery(HEALTH_CHECK);
   return <div className='App'></div>;
}

export default App;
