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
export interface LocationParams {
  locationId: number;
}
export interface LocationListingState {
  locations: Location[];
  loading: boolean;
  params: LocationParams;
}

export interface FetchLocationListingAction {
  payload: {[key: string]: unknown};
  type: string;
}

export interface SuccessFetchLocationListingAction {
  type: string;
  payload: {
    response: Location[];
  };
}

export type FetchLocationListing = () => FetchLocationListingAction;

export type PendFetchLocationListing = () => FetchLocationListingAction;

export type SuccessFetchLocationListing = (
  data: Location[],
) => SuccessFetchLocationListingAction;

export type FailFetchLocationListing = () => FetchLocationListingAction;

export interface SelectLocationIdAction {
  payload: {locationId: number};
  type: string;
}

export type SelectLocationId = (locationId: number) => SelectLocationIdAction;
