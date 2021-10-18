import {CalcRoomCostState} from '../../../../../types';
import {createReducer} from '../../../../../utils/createReducer';
import {calcRoomCostHandlers} from './handlers';

export const calcRoomCostInitialState: CalcRoomCostState = {
  cost: 0,
  loading: false,
};

export const calcRoomCost = createReducer(
  calcRoomCostInitialState,
  calcRoomCostHandlers,
);
