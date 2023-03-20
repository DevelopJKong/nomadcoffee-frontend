import styled from 'styled-components';
import { ReactNode } from 'react';
import { BaseBox } from '../shard';

interface IFormBox {
   children: ReactNode;
   type?: string;
}

const Container = styled(BaseBox)<{ type: string }>`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 35px 40px 25px 40px;
   margin-bottom: 10px;
   form {
      margin-top: ${(props) => (props.type === 'SIGN_UP' ? '5px' : '35px')};
      width: 100%;
      display: flex;
      justify-items: center;
      flex-direction: column;
      align-items: center;
   }
`;

const FormBox = ({ children, type = 'DEFAULT' }: IFormBox) => {
   return <Container type={type}>{children}</Container>;
};

export default FormBox;
