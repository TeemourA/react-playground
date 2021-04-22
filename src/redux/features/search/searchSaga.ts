import { call, put, debounce } from 'redux-saga/effects';
import { fetchDataByName } from '../../requests/requests';
import {
  setSearchStatus,
  setSearchResults,
  fetchCityByName,
  SearchStatuses,
} from '../search/searchSlice';

function* handleFetchCityByName(action: any): Generator<any> {
  try {
    const { cityName } = action.payload;
    // if (cityName.length === 0) {
    //   return put(setSearchStatus(SearchStatuses.idle));
    // }

    // yield put(setSearchStatus(SearchStatuses.searching));
    yield put(setSearchResults([]));

    const response: any = yield call(() => fetchDataByName(cityName));
    const { data } = response;

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
