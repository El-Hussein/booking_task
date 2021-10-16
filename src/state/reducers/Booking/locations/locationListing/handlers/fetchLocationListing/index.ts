import {Location, LocationListingState} from '../../../../../../../types';
import {FETCH_LOCATION_LISTING} from '../../../../../../actions/booking/ACTION_TYPES';

const fetchLocationListingHandler = {
  [FETCH_LOCATION_LISTING.PENDING]: (draftState: LocationListingState) => {
    draftState.loading = true;
  },
  [FETCH_LOCATION_LISTING.ERROR]: (draftState: LocationListingState) => {
    draftState.loading = false;
  },
  [FETCH_LOCATION_LISTING.SUCCESS]: (
    draftState: LocationListingState,
    {response: locations}: {response: Location[]},
  ) => {
    draftState.locations = locations;
  },
};

export default fetchLocationListingHandler;
