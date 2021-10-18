import {RoomsPerLocationState} from '../../../../../types';
import {createReducer} from '../../../../../utils/createReducer';
import {roomsPerLocationHandlers} from './handlers';

export const roomsPerLocationInitialState: RoomsPerLocationState = {
  rooms: [],
  loading: false,
};

export const roomsPerLocation = createReducer(
  roomsPerLocationInitialState,
  roomsPerLocationHandlers,
);
