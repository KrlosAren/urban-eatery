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
    views: [],
    error: [],
    isError: false,
    isLoading: false,
  },
  reducers: {
    saveView: (state, { payload }) => ({
      favorites: [...state.views, payload],
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
    emptyErrors: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  extraReducers: {
    [fetchSearch.pending]: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    [fetchSearch.fulfilled]: (state, { payload }) => ({
      ...state,
      results: [...payload],
      isLoading: false,
      error: false,
    }),
    [fetchSearch.rejected]: (state, action) => ({
      ...state,
      isError: true,
      error: [...state.error, action.error.message],
      isLoading: false,
    }),
  },
});

export default slice.reducer;

// actions
export const { saveView, addData, setError, emptyErrors } = slice.actions;
