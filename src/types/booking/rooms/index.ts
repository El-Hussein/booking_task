import {TimePeriod} from '../../../components/TimeLine';

export interface Room {
  id: number;
  name: string;
  image_link: string;
  max_people_number: number;
}

export interface RoomsPerLocationState {
  rooms: Room[];
  loading: boolean;
}

export interface CalcRoomCostState {
  cost: number;
  loading: boolean;
}

export interface RoomFreePeriodsState {
  freePeriods: {
    [key: string]: number[];
  };
  loading: boolean;
}

export interface FetchRoomsPerLocationAction {
  payload: {locationId: number};
  type: string;
}

export interface SuccessFetchRoomsPerLocationAction {
  type: string;
  payload: {
    response: Room[];
  };
}

export type FetchRoomsPerLocation = (
  locationId: number,
) => FetchRoomsPerLocationAction;

export type PendFetchRoomsPerLocation = () => FetchRoomsPerLocationAction;

export type SuccessFetchRoomsPerLocation = (
  data: Room[],
) => SuccessFetchRoomsPerLocationAction;

export type FailFetchRoomsPerLocation = () => FetchRoomsPerLocationAction;

export interface FetchRoomFreePeriodsAction {
  payload: {
    roomId: number;
    bookingDate: string;
  };
  type: string;
}

export interface SuccessFetchRoomFreePeriodsApiSuccessResponse {
  [key: string]: number[];
}

export interface SuccessFetchRoomFreePeriodsAction {
  type: string;
  payload: {
    response: SuccessFetchRoomFreePeriodsApiSuccessResponse;
  };
}

export type FetchRoomFreePeriods = (
  locationId: number,
) => FetchRoomFreePeriodsAction;

export type PendFetchRoomFreePeriods = () => FetchRoomFreePeriodsAction;

export type SuccessFetchRoomFreePeriods = (
  data: SuccessFetchRoomFreePeriodsApiSuccessResponse,
) => SuccessFetchRoomFreePeriodsAction;

export type FailFetchRoomFreePeriods = () => FetchRoomFreePeriodsAction;

export interface CalcRoomCostAction {
  payload: {
    roomId: number;
    bookingDate: string;
    selectedTime: TimePeriod;
  };
  type: string;
}

export interface SuccessCalcRoomCostAction {
  type: string;
  payload: {
    response: number;
  };
}

export type CalcRoomCost = (
  roomId: number,
  bookingDate: string,
  selectedTime: TimePeriod,
) => CalcRoomCostAction;

export type PendCalcRoomCost = () => CalcRoomCostAction;

export type SuccessCalcRoomCost = (data: number) => SuccessCalcRoomCostAction;

export type FailCalcRoomCost = () => CalcRoomCostAction;
