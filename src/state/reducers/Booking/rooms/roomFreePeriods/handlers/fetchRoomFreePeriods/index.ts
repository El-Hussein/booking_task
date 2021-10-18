import {
  RoomFreePeriodsState,
  SuccessFetchRoomFreePeriodsApiSuccessResponse,
} from '../../../../../../../types';
import {FETCH_ROOM_FREE_PERIOD} from '../../../../../../actions/booking/ACTION_TYPES';

const fetchRoomFreePeriodsHandler = {
  [FETCH_ROOM_FREE_PERIOD.PENDING]: (draftState: RoomFreePeriodsState) => {
    draftState.loading = true;
  },
  [FETCH_ROOM_FREE_PERIOD.ERROR]: (draftState: RoomFreePeriodsState) => {
    draftState.loading = false;
  },
  [FETCH_ROOM_FREE_PERIOD.SUCCESS]: (
    draftState: RoomFreePeriodsState,
    {
      response: freePeriods,
    }: {response: SuccessFetchRoomFreePeriodsApiSuccessResponse},
  ) => {
    draftState.freePeriods = freePeriods;
    draftState.loading = false;
  },
};

export default fetchRoomFreePeriodsHandler;
