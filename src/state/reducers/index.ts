import {combineReducers} from 'redux';
import {booking} from './Booking';

const reducers = () =>
  combineReducers({
    booking,
  });

export default reducers;
