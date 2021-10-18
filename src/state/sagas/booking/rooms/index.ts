import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  CalcRoomCostAction,
  FetchRoomFreePeriodsAction,
  FetchRoomsPerLocationAction,
  Room,
  SuccessFetchRoomFreePeriodsApiSuccessResponse,
} from '../../../../types';
import {
  CALC_ROOM_COST,
  FETCH_ROOMS_PER_LOCATION,
  FETCH_ROOM_FREE_PERIOD,
} from '../../../actions/booking/ACTION_TYPES';
import {
  failCalcRoomCost,
  failFetchRoomFreePeriods,
  failFetchRoomsPerLocation,
  pendCalcRoomCost,
  pendFetchRoomFreePeriods,
  pendFetchRoomsPerLocation,
  successCalcRoomCost,
  successFetchRoomFreePeriods,
  successFetchRoomsPerLocation,
} from '../../../actions';
import {
  calcRoomCostAPI,
  fetchRoomFreePeriodsAPI,
  fetchRoomsPerLocationAPI,
} from '../../../services';

export function* fetchRoomsPerLocation({payload}: FetchRoomsPerLocationAction) {
  try {
    const {locationId} = payload;
    yield put(pendFetchRoomsPerLocation());
    const data: Room[] = yield call(fetchRoomsPerLocationAPI, locationId);
    yield put(successFetchRoomsPerLocation(data));
  } catch (error) {
    yield put(failFetchRoomsPerLocation());
  }
}

export function* fetchRoomFreePeriods({payload}: FetchRoomFreePeriodsAction) {
  try {
    const {bookingDate, roomId} = payload;
    yield put(pendFetchRoomFreePeriods());
    const data: SuccessFetchRoomFreePeriodsApiSuccessResponse = yield call(
      fetchRoomFreePeriodsAPI,
      roomId,
      bookingDate,
    );
    yield put(successFetchRoomFreePeriods(data));
  } catch (error) {
    yield put(failFetchRoomFreePeriods());
  }
}

export function* calcRoomCost({payload}: CalcRoomCostAction) {
  try {
    const {bookingDate, roomId, selectedTime} = payload;
    yield put(pendCalcRoomCost());
    const data: number = yield call(
      calcRoomCostAPI,
      roomId,
      bookingDate,
      selectedTime,
    );
    yield put(successCalcRoomCost(data));
  } catch (error) {
    yield put(failCalcRoomCost());
  }
}

function* watchFetchRoomsPerLocationSaga() {
  yield takeLatest(FETCH_ROOMS_PER_LOCATION.ACTION, fetchRoomsPerLocation);
}

function* watchFetchRoomFreePeriodsSaga() {
  yield takeLatest(FETCH_ROOM_FREE_PERIOD.ACTION, fetchRoomFreePeriods);
}

function* watchCalcRoomCostSaga() {
  yield takeLatest(CALC_ROOM_COST.ACTION, calcRoomCost);
}

export function* roomsSagas() {
  yield all([
    fork(watchFetchRoomsPerLocationSaga),
    fork(watchFetchRoomFreePeriodsSaga),
    fork(watchCalcRoomCostSaga),
  ]);
}
