import {RoomFreePeriodsState} from '../../../../../types';
import {createReducer} from '../../../../../utils/createReducer';
import {roomFreePeriodsHandlers} from './handlers';

export const roomFreePeriodsInitialState: RoomFreePeriodsState = {
  freePeriods: {},
  loading: false,
};

export const roomFreePeriods = createReducer(
  roomFreePeriodsInitialState,
  roomFreePeriodsHandlers,
);
