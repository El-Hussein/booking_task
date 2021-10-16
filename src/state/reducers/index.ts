import {combineReducers} from 'redux';
import {booking} from './booking';

const reducers = () =>
  combineReducers({
    booking,
  });

export default reducers;
