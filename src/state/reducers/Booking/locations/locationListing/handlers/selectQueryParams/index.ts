import {LocationListingState} from '../../../../../../../types';
import {SELECT_LOCATION_ID} from '../../../../../../actions/booking/ACTION_TYPES';

const selectQueryParamsHandler = {
  [SELECT_LOCATION_ID]: (
    draftState: LocationListingState,
    {locationId}: {locationId: number},
  ) => {
    draftState.params.locationId = locationId;
  },
};

export default selectQueryParamsHandler;
