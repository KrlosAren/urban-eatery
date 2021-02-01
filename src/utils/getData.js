import client from '../apollo';
import { SEARCH } from '../apollo/querys';

const getData = async (query, location = 'santiago') => {
  const response = await client.query({
    variables: {
      query,
      location,
    },
    query: SEARCH,
  });
  return response;
};

export default getData;
