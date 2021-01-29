import { useState, useEffect } from 'react';
import getData from '../utils/getData';

export const useGetData = (query) => {
  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
  });

  useEffect(() => {
    getData(query)
      .then((data) =>
        setState({
          data,
          loading: false,
          error: false,
        })
      )
      .catch((error) =>
        setState({
          error,
          loading: false,
        })
      );
  }, [query]);

  return state;
};

export default useGetData;
