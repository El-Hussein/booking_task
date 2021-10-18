import {ReduxState} from '../../../../types';

export const selectConferenceRoomsPerLocation = (state: ReduxState) => {
  return state.booking.rooms.roomsPerLocation.rooms;
};

export const selectConferenceRoomsPerLocationLoading = (state: ReduxState) => {
  return state.booking.rooms.roomsPerLocation.loading;
};

export const selectRoomFreePeriods = (state: ReduxState) => {
  return state.booking.rooms.roomFreePeriods.freePeriods;
};

export const selectRoomFreePeriodsLoading = (state: ReduxState) => {
  return state.booking.rooms.roomFreePeriods.loading;
};

export const selectCalculatedRoomCost = (state: ReduxState) => {
  return state.booking.rooms.calcRoomCost.cost;
};

export const selectCalcRoomCostLoading = (state: ReduxState) => {
  return state.booking.rooms.calcRoomCost.loading;
};
