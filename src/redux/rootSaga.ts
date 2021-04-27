import { watch } from 'node:fs';
import { all } from 'redux-saga/effects';
import { watchSearchSaga } from './features/search/searchSaga';
import { watchWeatherDataSaga } from './features/weatherData/weatherDataSaga';

export default function* rootSaga() {
  yield all([watchSearchSaga(), watchWeatherDataSaga()]);
}
