import fetchLocationListingHandler from './fetchLocationListing';
import selectQueryParamsHandler from './selectQueryParams';

export const locationHandlers = {
  ...fetchLocationListingHandler,
  ...selectQueryParamsHandler,
};
