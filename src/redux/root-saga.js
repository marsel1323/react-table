import { all, call } from 'redux-saga/effects';
import { fillTextSagas } from './fillText/fillText.sagas';

export default function* rootSaga() {
  yield all([
    call(fillTextSagas),
  ]);
}
