import {
  FailFetchLocationListing,
  FetchLocationListing,
  PendFetchLocationListing,
  SelectLocationId,
  SuccessFetchLocationListing,
} from '../../../../types';
import {createAction} from '../../../../utils/action.helpers';
import {FETCH_LOCATION_LISTING, SELECT_LOCATION_ID} from '../ACTION_TYPES';

export const selectLocationId: SelectLocationId = createAction(
  SELECT_LOCATION_ID,
  'locationId',
);

export const fetchLocationListing: FetchLocationListing = createAction(
  FETCH_LOCATION_LISTING.ACTION,
);

export const pendFetchLocationListing: PendFetchLocationListing = createAction(
  FETCH_LOCATION_LISTING.PENDING,
);

export const successFetchLocationListing: SuccessFetchLocationListing =
  createAction(FETCH_LOCATION_LISTING.SUCCESS, 'response');

export const failFetchLocationListing: FailFetchLocationListing = createAction(
  FETCH_LOCATION_LISTING.ERROR,
);
