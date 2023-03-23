import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
interface IAvatar {
   url: string;
   isLarge: boolean;
}

const SAvatar = styled.div<{ isLarge: boolean }>`
   width: ${({ isLarge }) => (isLarge ? '35px' : '25px')};
   height: ${({ isLarge }) => (isLarge ? '35px' : '25px')};
   border-radius: 50%;
   background-color: ${({ theme }) => theme.colors.white};
   border: 1px solid ${({ theme }) => theme.borderColor};
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Img = styled.img`
   max-width: 100%;
`;

const Avatar = ({ url = '', isLarge }: IAvatar) => {
   return <SAvatar isLarge={isLarge}>{url ? <Img src={url} alt='avatar' /> : <FontAwesomeIcon icon={faUser} />}</SAvatar>;
};

export default Avatar;
