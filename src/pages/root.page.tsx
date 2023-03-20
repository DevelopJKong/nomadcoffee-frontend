import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
`;

const Root = () => {
   return (
      <Container>
         <Outlet />
      </Container>
   );
};

export default Root;
