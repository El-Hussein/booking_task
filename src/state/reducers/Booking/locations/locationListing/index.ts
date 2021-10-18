import {LocationListingState} from '../../../../../types';
import {createReducer} from '../../../../../utils/createReducer';
import {locationHandlers} from './handlers';

export const locationListingInitialState: LocationListingState = {
  locations: [],
  loading: false,
  params: {
    locationId: 0,
  },
};

export const locationListing = createReducer(
  locationListingInitialState,
  locationHandlers,
);
