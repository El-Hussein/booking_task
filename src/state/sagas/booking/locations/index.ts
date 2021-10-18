import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {Location} from '../../../../types';
import {FETCH_LOCATION_LISTING} from '../../../actions/booking/ACTION_TYPES';
import {
  failFetchLocationListing,
  pendFetchLocationListing,
  successFetchLocationListing,
} from '../../../actions';
import {fetchLocationListingAPI} from '../../../services';

export function* fetchLocationListing() {
  try {
    yield put(pendFetchLocationListing());
    const data: Location[] = yield call(fetchLocationListingAPI);
    yield put(successFetchLocationListing(data));
  } catch (error) {
    yield put(failFetchLocationListing());
  }
}

function* watchFetchLocationListingSaga() {
  yield takeLatest(FETCH_LOCATION_LISTING.ACTION, fetchLocationListing);
}

export function* locationListingSagas() {
  yield all([fork(watchFetchLocationListingSaga)]);
}
