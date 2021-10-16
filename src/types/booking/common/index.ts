import {LocationListingState} from '../locations';

export interface BookingState {
  locations: {
    locationListing: LocationListingState;
  };
}
