import { createSlice } from '@reduxjs/toolkit';
import { processCurrentData, processEightDaysData } from '../../../utils';

export enum WeatherStatuses {
  loading = 'loading',
  error = 'error',
  idle = 'idle',
}

type WeatherStatus = WeatherStatuses.loading | WeatherStatuses.idle;

interface CurrentDataState {
  currentData: any;
  eightDaysData: any;
  weatherStatus: WeatherStatus;
}

const initialState: CurrentDataState = {
  currentData: null,
  eightDaysData: null,
  weatherStatus: WeatherStatuses.idle,
};

const slice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    fetchCurrentData: (state, action) => {},
    fetchEightDaysData: (state, action) => {},
    setCurrentData: (state, { payload }) => {
      state.currentData = processCurrentData(payload);
    },
    setEightDaysData: (state, { payload }) => {
      console.log(payload);
      state.eightDaysData = processEightDaysData(payload);
    },
    setWeatherStatus: (state, { payload }) => {
      state.weatherStatus = payload;
    },
    clear: (state) => {
      state.currentData = null;
      state.eightDaysData = null;
    },
  },
});

export const weatherSlice = slice.reducer;

export const {
  fetchCurrentData,
  fetchEightDaysData,
  setCurrentData,
  setEightDaysData,
  setWeatherStatus,
  clear,
} = slice.actions;
