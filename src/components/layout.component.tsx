import styled from 'styled-components';
import { IChildren } from './shard';
import Header from './header.component';

const Content = styled.div`
   max-width: 930px;
   width: 100%;
   margin: 0 auto;
`;

const Layout = ({ children }: IChildren) => {
   return (
      <>
         <Header />
         <Content>{children}</Content>
      </>
   );
};

export default Layout;
