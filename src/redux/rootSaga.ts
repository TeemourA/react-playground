import { all } from 'redux-saga/effects';
import { watchSearchSaga } from './features/search/searchSaga';

export default function* rootSaga() {
  yield all([watchSearchSaga()]);
}
