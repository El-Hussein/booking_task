import {all, fork} from 'redux-saga/effects';
import {locationListingSagas} from './locations';

export function* bookingSagas() {
  yield all([fork(locationListingSagas)]);
}
