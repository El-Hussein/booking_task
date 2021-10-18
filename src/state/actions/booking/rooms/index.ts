import {
  FailFetchRoomsPerLocation,
  FetchRoomsPerLocation,
  PendFetchRoomsPerLocation,
  SuccessFetchRoomsPerLocation,
  FetchRoomFreePeriods,
  PendFetchRoomFreePeriods,
  SuccessFetchRoomFreePeriods,
  FailFetchRoomFreePeriods,
  CalcRoomCost,
  PendCalcRoomCost,
  SuccessCalcRoomCost,
  FailCalcRoomCost,
} from '../../../../types';
import {createAction} from '../../../../utils/action.helpers';
import {
  CALC_ROOM_COST,
  FETCH_ROOMS_PER_LOCATION,
  FETCH_ROOM_FREE_PERIOD,
} from '../ACTION_TYPES';

export const fetchRoomsPerLocation: FetchRoomsPerLocation = createAction(
  FETCH_ROOMS_PER_LOCATION.ACTION,
  'locationId',
);

export const pendFetchRoomsPerLocation: PendFetchRoomsPerLocation =
  createAction(FETCH_ROOMS_PER_LOCATION.PENDING);

export const successFetchRoomsPerLocation: SuccessFetchRoomsPerLocation =
  createAction(FETCH_ROOMS_PER_LOCATION.SUCCESS, 'response');

export const failFetchRoomsPerLocation: FailFetchRoomsPerLocation =
  createAction(FETCH_ROOMS_PER_LOCATION.ERROR);

export const fetchRoomFreePeriods: FetchRoomFreePeriods = createAction(
  FETCH_ROOM_FREE_PERIOD.ACTION,
  'locationId',
);

export const pendFetchRoomFreePeriods: PendFetchRoomFreePeriods = createAction(
  FETCH_ROOM_FREE_PERIOD.PENDING,
);

export const successFetchRoomFreePeriods: SuccessFetchRoomFreePeriods =
  createAction(FETCH_ROOM_FREE_PERIOD.SUCCESS, 'response');

export const failFetchRoomFreePeriods: FailFetchRoomFreePeriods = createAction(
  FETCH_ROOM_FREE_PERIOD.ERROR,
);

export const calcRoomCost: CalcRoomCost = createAction(
  CALC_ROOM_COST.ACTION,
  'roomId',
  'bookingDate',
  'selectedTime',
);

export const pendCalcRoomCost: PendCalcRoomCost = createAction(
  CALC_ROOM_COST.PENDING,
);

export const successCalcRoomCost: SuccessCalcRoomCost = createAction(
  CALC_ROOM_COST.SUCCESS,
  'response',
);

export const failCalcRoomCost: FailCalcRoomCost = createAction(
  CALC_ROOM_COST.ERROR,
);
