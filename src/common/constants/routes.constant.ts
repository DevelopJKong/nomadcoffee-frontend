export const routes = {
   logout: {
      home: '/',
      login: '/login',
      signUp: '/sign-up',
      withOut: '*',
   },
   login: {
      home: '/',
      main: '/main',
      addShop: 'shop/add',
      editShop: {
         see: 'shop/edit/',
         route: 'shop/edit/:id',
      },
      shopDetail: {
         see: 'shop/',
         route: 'shop/:id',
      },
      withOut: '*',
   },
} as const;

export const mainRoute = (url: string) => {
   return `/main/${url}`;
};
