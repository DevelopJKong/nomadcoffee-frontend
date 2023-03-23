const routes = {
   logout: {
      home: '/',
      login: '/login',
      signUp: '/sign-up',
      withOut: '*',
   },
   login: {
      home: '/',
      main: '/main',
      withOut: '*',
   },
} as const;

export default routes;
