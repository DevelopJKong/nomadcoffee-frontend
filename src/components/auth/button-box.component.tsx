import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseBox } from '../shard';

interface IBottomBox {
   cta: string;
   link: string;
   linkText: string;
}

const SBottomBox = styled(BaseBox)`
   padding: 20px 0px;
   text-align: center;
   a {
      font-weight: 600;
      margin-left: 5px;
      color: ${({ theme }) => theme.accent};
      cursor: pointer;
   }
`;
const BottomBox = ({ cta, link, linkText }: IBottomBox) => {
   return (
      <SBottomBox>
         <span>{cta}</span>
         <Link to={link}>{linkText}</Link>
      </SBottomBox>
   );
};

export default BottomBox;
