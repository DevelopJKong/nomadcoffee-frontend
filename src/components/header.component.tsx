import styled from 'styled-components';
import useUser from '../hooks/use-user.hook';
import { Logo as SharedLogo } from './shard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import Avatar from './avatar.component';
import { logUserOut } from '../apollo';
import { useNavigate } from 'react-router-dom';

const SHeader = styled.div`
   width: 100%;
   border-radius: 1px solid ${({ theme }) => theme.borderColor};
   background-color: ${({ theme }) => theme.bgColor};
   padding: 10px 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Wrapper = styled.div`
   max-width: 930px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Column = styled.div``;

const Logo = styled(SharedLogo)`
   width: 50px;
   height: 50px;
`;

const Icon = styled.span`
   margin-left: 15px;
`;

const IconWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

const IconContainer = styled.div`
   display: flex;
   border-radius: 4px;
   padding: 5px 15px;
   color: ${({ theme }) => theme.colors.black};
   font-weight: 600;
`;

const Header = () => {
   const { data } = useUser();
   const navigate = useNavigate();
   const onLogOutClick = () => {
      logUserOut();
      navigate('/');
   };
   return (
      <SHeader>
         <Wrapper>
            <Column>
               <Logo src='https://i.imgur.com/dtuN6qr.png' alt='logo' />
            </Column>
            <IconContainer>
               <Icon>
                  <IconWrapper>
                     <FontAwesomeIcon icon={faHome} size='lg' />
                  </IconWrapper>
               </Icon>
               <Icon>
                  <IconWrapper>
                     <FontAwesomeIcon icon={faCompass} size='lg' />
                  </IconWrapper>
               </Icon>
               <Icon onClick={onLogOutClick}>
                  <Avatar isLarge={true} url={data?.me?.user?.avatar} />
               </Icon>
            </IconContainer>
         </Wrapper>
      </SHeader>
   );
};

export default Header;
