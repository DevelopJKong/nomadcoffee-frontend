import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout.component';

const RootMain = () => {
   return (
      <Layout>
         <Outlet />
      </Layout>
   );
};

export default RootMain;
