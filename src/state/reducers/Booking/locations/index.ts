import {combineReducers} from 'redux';
import {locationListing} from './locationListing';

export const locations = combineReducers({
  locationListing,
});
