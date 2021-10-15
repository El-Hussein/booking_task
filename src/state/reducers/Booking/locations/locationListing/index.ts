import {LocationListingState} from '../../../../../types';
import {createReducer} from '../../../../../utils/createReducer';
import {locationHandlers} from './handlers';

export const locationListingInitialState: LocationListingState = {
  locations: [],
  loading: false,
};

export const locationListing = createReducer(
  locationListingInitialState,
  locationHandlers,
);
