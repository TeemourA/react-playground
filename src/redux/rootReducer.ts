import { combineReducers } from '@reduxjs/toolkit';
import { searchSlice } from './features/search/searchSlice';

const rootReducer = combineReducers({
  search: searchSlice,
});

export default rootReducer;
