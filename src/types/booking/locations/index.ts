export enum LocationSymbol {
  DOLLAR = '$',
}

export interface Location {
  id: number;
  name: string;
  address: string;
  currency: string;
  symbol: LocationSymbol.DOLLAR;
}

export interface LocationListingState {
  locations: Location[];
  loading: boolean;
}

export interface FetchLocationListingRequestSuccessResponse {
  data: Location[];
}

export interface FetchLocationListingAction {
  payload: {[key: string]: unknown};
  type: string;
}

export interface SuccessFetchLocationListingAction {
  type: string;
  payload: {
    response: FetchLocationListingRequestSuccessResponse;
  };
}

export type FetchLocationListing = () => FetchLocationListingAction;

export type PendFetchLocationListing = () => FetchLocationListingAction;

export type SuccessFetchLocationListing = (
  data: FetchLocationListingRequestSuccessResponse,
) => SuccessFetchLocationListingAction;

export type FailFetchLocationListing = () => FetchLocationListingAction;
