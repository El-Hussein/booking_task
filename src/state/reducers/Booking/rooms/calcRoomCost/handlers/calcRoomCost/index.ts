import {CalcRoomCostState} from '../../../../../../../types';
import {CALC_ROOM_COST} from '../../../../../../actions/booking/ACTION_TYPES';

const calcRoomCostHandler = {
  [CALC_ROOM_COST.PENDING]: (draftState: CalcRoomCostState) => {
    draftState.loading = true;
  },
  [CALC_ROOM_COST.ERROR]: (draftState: CalcRoomCostState) => {
    draftState.loading = false;
  },
  [CALC_ROOM_COST.SUCCESS]: (
    draftState: CalcRoomCostState,
    {response: cost}: {response: number},
  ) => {
    draftState.cost = cost;
    draftState.loading = false;
  },
};

export default calcRoomCostHandler;
