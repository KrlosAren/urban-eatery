import client from '../apollo';
import { SEARCH } from '../apollo/querys';

const getData = async (query) => {
  /**
   *
   * get data from query user
   *
   * @params
   *
   * terms and location by default location is 'santiago'
   */

  const response = await client.query({
    variables: {
      search: query.search,
      location: query.location,
    },
    query: SEARCH,
  });
  return response;
};

export default getData;
