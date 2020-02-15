import {
  all,
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import FillTextActionTypes from './fillText.types';
import {
  fetchFillTextDataSuccess,
  fetchFillTextDataFailure,
} from './fillText.actions';
import { fetchData } from '../../api/fillText';

export function* fetchDataAsync() {
  try {
    const fillTextData = yield fetchData();
    console.log('fetchDataAsync', fillTextData);
    yield put(fetchFillTextDataSuccess(fillTextData));
  } catch (error) {
    console.error('fetchDataAsync', error);
    yield put(fetchFillTextDataFailure(error.message));
  }
}

export function* fetchDataStart() {
  yield takeLatest(FillTextActionTypes.FETCH_FILL_TEXT_DATA_START, fetchDataAsync);
}

export function* fillTextSagas() {
  yield all([call(fetchDataStart)]);
}
