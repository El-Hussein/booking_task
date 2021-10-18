import {combineReducers} from 'redux';
import {roomsPerLocation} from './roomsPerLocation';
import {roomFreePeriods} from './roomFreePeriods';
import {calcRoomCost} from './calcRoomCost';

export const rooms = combineReducers({
  roomsPerLocation,
  roomFreePeriods,
  calcRoomCost,
});
