import {ReduxState} from '../../../../types';

export const selectConferenceLocations = (state: ReduxState) => {
  return state.booking.locations.locationListing.locations;
};

export const selectConferenceLocationsLoading = (state: ReduxState) => {
  return state.booking.locations.locationListing.loading;
};

export const selectConferenceLocationsParams = (state: ReduxState) => {
  return state.booking.locations.locationListing.params;
};
