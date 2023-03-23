import { DefaultTheme, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const lightTheme: DefaultTheme = {
   accent: '#0095f6',
   bgColor: '#FAFAFA',
   fontColor: '#2c2c2c',
   borderColor: 'rgb(219, 219, 219)',
   colors: {
      tomato: 'tomato',
      white: '#FAFAFA',
      black: '#2c2c2c',
      gray: '#b2bec3',
   },
   fontSize: {
      small: '12px',
      medium: '14px',
      large: '16px',
   },
   social: {
      naver: '#3eaf0e',
      kakao: '#ffdc00',
   },
};

export const darkTheme: DefaultTheme = {
   accent: '#0095f6',
   bgColor: '#353b48',
   fontColor: '#FAFAFA',
   borderColor: 'rgb(219, 219, 219)',
   colors: {
      tomato: 'tomato',
      white: '#FAFAFA',
      black: '#2c2c2c',
      gray: '#b2bec3',
   },
   fontSize: {
      small: '12px',
      medium: '14px',
      large: '16px',
   },
   social: {
      naver: '#3eaf0e',
      kakao: '#ffdc00',
   },
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color: ${({ theme }) => theme.bgColor};
        font-size:${({ theme }) => theme.fontSize.medium};
        font-family:'Open Sans', sans-serif;
        color: ${({ theme }) => theme.fontColor};
    }
    a {
      color:inherit;
      text-decoration: none;
    }
`;
