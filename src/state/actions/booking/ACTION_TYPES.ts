import {createFullActionSet} from '../../../utils/action.helpers';

export const FETCH_LOCATION_LISTING = createFullActionSet(
  'FETCH_LOCATION_LISTING',
);

export const SELECT_LOCATION_ID = 'SELECT_LOCATION_ID';

export const FETCH_ROOMS_PER_LOCATION = createFullActionSet(
  'FETCH_ROOMS_PER_LOCATION',
);

export const FETCH_ROOM_FREE_PERIOD = createFullActionSet(
  'FETCH_ROOM_FREE_PERIOD',
);

export const CALC_ROOM_COST = createFullActionSet('CALC_ROOM_COST');
