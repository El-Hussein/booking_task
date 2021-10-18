import {Room, RoomsPerLocationState} from '../../../../../../../types';
import {FETCH_ROOMS_PER_LOCATION} from '../../../../../../actions/booking/ACTION_TYPES';

const fetchRoomsPerLocationHandler = {
  [FETCH_ROOMS_PER_LOCATION.PENDING]: (draftState: RoomsPerLocationState) => {
    draftState.loading = true;
  },
  [FETCH_ROOMS_PER_LOCATION.ERROR]: (draftState: RoomsPerLocationState) => {
    draftState.loading = false;
  },
  [FETCH_ROOMS_PER_LOCATION.SUCCESS]: (
    draftState: RoomsPerLocationState,
    {response: rooms}: {response: Room[]},
  ) => {
    draftState.rooms = rooms;
    draftState.loading = false;
  },
};

export default fetchRoomsPerLocationHandler;
