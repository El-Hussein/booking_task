import {TimePeriod} from '../../../../components/TimeLine';
import {API_URL} from '../../../../constants/keys';
import HttpClient from '../../../../utils/HttpClient';

export const fetchRoomsPerLocationAPI = (locationId: number) => {
  return HttpClient.get(
    `${API_URL}external-meetingroom?cmd=getConferenceRooms&locationid=${locationId}`,
  ).then(res => res.data);
};

export const fetchRoomFreePeriodsAPI = (
  roomId: number,
  bookingDate: string,
) => {
  return HttpClient.get(
    `${API_URL}external-meetingroom?cmd=getFreePeriods&conference_roomid=${roomId}&booking_date=${bookingDate}`,
  ).then(res => res.data);
};

export const calcRoomCostAPI = (
  roomId: number,
  bookingDate: string,
  selectedTime: TimePeriod,
) => {
  return HttpClient.get(
    `${API_URL}external-meetingroom?cmd=getBookingCost&fromTime=${selectedTime.start}&toTime=${selectedTime.end}&conferenceRoom=${roomId}&date=${bookingDate}`,
  ).then(res => res.data);
};
