import {all} from 'redux-saga/effects';
import {bookingSagas} from './booking';

export default function* rootSaga() {
  yield all([bookingSagas()]);
}
