import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchDataByID, fetchDataByCoords } from '../../requests/requests';
import { setSearchedCity } from '../search/searchSlice';
import {
  fetchCurrentData,
  fetchEightDaysData,
  setCurrentData,
  setEightDaysData,
  setWeatherStatus,
  WeatherStatuses,
} from './weatherDataSlice';

function* handleFetchCurrentData(action: any): Generator<any> {
  try {
    yield put(setEightDaysData(null));
    yield put(setSearchedCity(''));
    yield put(setWeatherStatus(WeatherStatuses.loading));

    const cityID = action.payload;
    const { data }: any = yield call(() => fetchDataByID(cityID));

    yield put(setCurrentData(data));
    yield put(setWeatherStatus(WeatherStatuses.idle));
  } catch (error) {
    yield put(setWeatherStatus(WeatherStatuses.error));
  }
}

function* handleFetchEightDaysData(action: any): Generator<any> {
  try {
    yield put(setCurrentData(null));
    yield put(setSearchedCity(''));
    yield put(setWeatherStatus(WeatherStatuses.loading));

    const coord = action.payload;
    const { data }: any = yield call(() => fetchDataByCoords(coord));
    console.log(coord, data.daily)

    yield put(setEightDaysData(data.daily));
    yield put(setWeatherStatus(WeatherStatuses.idle));
  } catch (error) {
    yield put(setWeatherStatus(WeatherStatuses.error));
  }
}

function* watchCurrent() {
  yield takeLatest(fetchCurrentData.type, handleFetchCurrentData);
}

function* watchEightDays() {
  yield takeLatest(fetchEightDaysData.type, handleFetchEightDaysData);
}

export function* watchWeatherDataSaga() {
  yield all([watchCurrent(), watchEightDays()]);
}
