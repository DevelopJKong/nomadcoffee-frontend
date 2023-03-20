import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Container = styled.nav`
   margin: 10px;
   height: 50px;
`;

const Logo = styled.div`
   background-color: ${({ theme }) => theme.colors.tomato};
   width: 50px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   svg {
      color: ${({ theme }) => theme.colors.white};
      font-size: 25px;
   }
`;

const Nav = () => {
   return (
      <Container>
         <Logo>
            <FontAwesomeIcon icon={faCoffee} />
         </Logo>
      </Container>
   );
};

export default Nav;
