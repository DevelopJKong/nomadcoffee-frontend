import styled from 'styled-components';

interface IButton {
   type: string;
   value: string;
   disabled: boolean;
}

const SButton = styled.input`
   cursor: pointer;
   border: none;
   border-radius: 3px;
   margin-top: 12px;
   background-color: ${(props) => props.theme.accent};
   color: white;
   text-align: center;
   padding: 8px 0px;
   font-weight: 600;
   width: 100%;
   opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;

const Button = (props: IButton) => <SButton {...props} />;
export default Button;
