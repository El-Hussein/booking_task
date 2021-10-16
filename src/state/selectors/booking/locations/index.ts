import {ReduxState} from '../../../../types';

export const selectConferenceLocationRooms = (state: ReduxState) => {
  return state.booking.locations.locationListing.locations;
};

export const selectConferenceLocationRoomsLoading = (state: ReduxState) => {
  return state.booking.locations.locationListing.locations;
};
