module.exports = {
   client: {
      includes: ['./src/**/*.{tsx,ts}'],
      tagName: 'gql',
      service: {
         name: 'home-work',
         url: 'http://localhost:5000/graphql',
      },
   },
};
