import { ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

interface IAuthLayout {
   children: ReactNode;
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 95vh;
   flex-direction: column;
`;

const Wrapper = styled.div`
   max-width: 350px;
   width: 100%;
`;

const Footer = styled.footer`
   margin-top: 20px;
`;

const DarkModeBtn = styled.div`
   cursor: pointer;
`;

const AuthLayout = ({ children }: IAuthLayout) => {
   return (
      <Container>
         <Wrapper>{children}</Wrapper>
         <Footer>
            <DarkModeBtn>
               <FontAwesomeIcon icon={faMoon} />
            </DarkModeBtn>
         </Footer>
      </Container>
   );
};

export default AuthLayout;
