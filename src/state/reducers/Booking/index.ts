import {combineReducers} from 'redux';
import {locations} from './locations';
import {rooms} from './rooms';

export const booking = combineReducers({
  locations,
  rooms,
});
