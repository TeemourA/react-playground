import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataByName } from '../../requests/requests';
import {
  setSearching,
  setNotFound,
  setSearchResults,
  fetchCityByName,
} from '../search/searchSlice';

function* handleFetchCityByName(action: any): Generator<any> {
  try {
    yield put(setNotFound(false));
    yield put(setSearching(true));
    yield put(setSearchResults([]));

    const {cityName} = action.payload;
    const response: any = yield call(() => fetchDataByName(cityName));
    const { data } = response;

    yield put(setSearchResults([data]));
    yield put(setSearching(false));
  } catch (error) {
    console.log(error);
    yield put(setSearching(false));
    yield put(setNotFound(true));
  }
}

export function* watchSearchSaga() {
  yield takeLatest(fetchCityByName.type, handleFetchCityByName);
}
