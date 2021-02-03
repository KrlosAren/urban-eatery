import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_KEY = secrets.API_KEY;

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Accept-Language': 'en_US',
  },
});

export default client;
