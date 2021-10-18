import {LocationListingState} from '../locations';
import {
  CalcRoomCostState,
  RoomFreePeriodsState,
  RoomsPerLocationState,
} from '../rooms';

export interface BookingState {
  locations: {
    locationListing: LocationListingState;
  };
  rooms: {
    roomsPerLocation: RoomsPerLocationState;
    calcRoomCost: CalcRoomCostState;
    roomFreePeriods: RoomFreePeriodsState;
  };
}
