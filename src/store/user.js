import { createSlice } from '@reduxjs/toolkit';
import getData from '../utils/getData';

// slice
const slice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    search: [],
    favorites: [],
    errors: null,
    isError: false,
    isLoading: true,
  },
  reducers: {
    saveItem: (state, { payload }) => ({
      favorites: [...state.favorites, payload],
    }),
    searchs: (state, { payload }) => ({
      search: [...state.search, payload],
    }),
    addData: (state, { payload }) => ({
      ...state,
      data: payload,
      isError: null,
      isLoading: false,
    }),
    setError: (state, { payload }) => ({
      ...state,
      errors: [...state.errors, payload],
      isError: true,
      isLoading: false,
    }),
  },
});

export default slice.reducer;

// actions
export const { saveItem, searchs, addData, setError } = slice.actions;

export const fetchData = ({ query }) => async (dispatch) => {
  try {
    await getData(query).then((response) => {
      dispatch(addData(response));
    });
  } catch (error) {
    dispatch(setError(error));
  }
};
