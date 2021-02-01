import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getData from '../utils/getData';

export const fetchSearch = createAsyncThunk(
  'users/fetchData',
  async (query) => {
    const response = await getData(query);
    return response.data.search.business;
  }
);

// slice
const slice = createSlice({
  name: 'users',
  initialState: {
    results: [],
    search: [],
    favorites: [],
    error: [],
    isError: false,
    isLoading: false,
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
      results: payload,
      isError: null,
      isLoading: false,
    }),
    setError: (state, { payload }) => ({
      ...state,
      error: [...state.error, payload],
      isError: true,
      isLoading: false,
    }),
  },
  extraReducers: {
    [fetchSearch.fulfilled]: (state, { payload }) => ({
      ...state,
      results: [...payload],
    }),
  },
});

export default slice.reducer;

// actions
export const { saveItem, searchs, addData, setError } = slice.actions;

// export const fetchData = ({ query }) => async (dispatch) => {
//   await getData(query)
//     .then((data) => {
//       dispatch(addData(data.data));
//     })
//     .catch((error) => {
//       dispatch(setError(error.message));
//     });
// };
