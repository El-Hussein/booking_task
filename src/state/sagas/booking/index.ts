import {all, fork} from 'redux-saga/effects';
import {locationListingSagas} from './locations';
import {roomsSagas} from './rooms';

export function* bookingSagas() {
  yield all([fork(locationListingSagas), fork(roomsSagas)]);
}
