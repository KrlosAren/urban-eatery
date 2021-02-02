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
    searchs: [],
    favorites: [],
    error: [],
    isError: false,
    isLoading: false,
  },
  reducers: {
    saveItem: (state, { payload }) => ({
      favorites: [...state.favorites, payload],
    }),
    saveSearch: (state, action) => ({
      searchs: [...state.searchs].push(action.payload),
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
    setCity: (state, { payload }) => ({
      ...state,
      city: payload,
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
export const {
  saveItem,
  saveSearch,
  addData,
  setError,
  setCity,
  emptyErrors,
} = slice.actions;
