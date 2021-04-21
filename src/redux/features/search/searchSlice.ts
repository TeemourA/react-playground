import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchedCity: string;
  searchResults: any[];
  placeholder: string;
  isSearching: boolean;
  notFound: boolean;
}

const initialState: SearchState = {
  searchedCity: '',
  searchResults: [],
  placeholder: 'Find city...',
  isSearching: false,
  notFound: false,
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchCityByName: (state, {payload}) => {},
    setSearchedCity: (state, {payload}) => {
      state.searchedCity = payload;
    },
    setSearching: (state, { payload }) => {
      state.isSearching = payload;
    },
    setNotFound: (state, { payload }) => {
      state.notFound = payload;
    },
    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },
  },
});

const searchSlice = slice.reducer;

export const {
  fetchCityByName,
  setSearchedCity,
  setSearchResults,
  setSearching,
  setNotFound,
} = slice.actions;
export { searchSlice };
