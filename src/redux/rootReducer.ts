import { combineReducers } from '@reduxjs/toolkit';
import { searchSlice } from './features/search/searchSlice';
import { weatherSlice } from './features/weatherData/weatherDataSlice';

const rootReducer = combineReducers({
  search: searchSlice,
  weather: weatherSlice,
});

export default rootReducer;
