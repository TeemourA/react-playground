import { call, put, debounce } from 'redux-saga/effects';
import { fetchDataByName } from '../../requests/requests';
import {
  setSearchStatus,
  setSearchResults,
  fetchCityByName,
  SearchStatuses,
} from './searchSlice';

function* handleFetchCityByName(action: any): Generator<any> {
  try {
    const cityName = action.payload;
    const { data }: any = yield call(() => fetchDataByName(cityName));

    yield put(setSearchResults([data]));
    yield put(setSearchStatus(SearchStatuses.idle));
  } catch (error) {
    console.error(error.message);
    yield put(setSearchStatus(SearchStatuses.notFound));
  }
}

export function* watchSearchSaga() {
  yield debounce(500, fetchCityByName.type, handleFetchCityByName);
}
