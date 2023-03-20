import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      accent: string;
      bgColor: string;
      fontColor: string;
      borderColor: string;
      colors: {
         tomato: string;
         white: string;
         black: string;
      };
      fontSize: {
         small: string;
         medium: string;
         large: string;
      };
      social: {
         naver: string;
         kakao: string;
      };
   }
}
