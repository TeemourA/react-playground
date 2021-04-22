import { createSlice } from '@reduxjs/toolkit';

export enum SearchStatuses {
  searching = 'searching',
  notFound = 'notFound',
  idle = 'idle',
}

type SearchStatus =
  | SearchStatuses.idle
  | SearchStatuses.searching
  | SearchStatuses.notFound;

console.log(SearchStatuses.idle === 'idle');

interface SearchState {
  searchedCity: string;
  searchResults: any[];
  placeholder: string;
  searchStatus: SearchStatus;
}

const initialState: SearchState = {
  searchedCity: '',
  searchResults: [],
  placeholder: 'Find city...',
  searchStatus: SearchStatuses.idle,
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchCityByName: (state, { payload }) => {},
    setSearchedCity: (state, { payload }) => {
      state.searchedCity = payload;
    },
    setSearchStatus: (state, { payload }) => {
      state.searchStatus = payload;
    },
    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },
  },
});

export const searchSlice = slice.reducer;

export const {
  fetchCityByName,
  setSearchedCity,
  setSearchResults,
  setSearchStatus,
} = slice.actions;
