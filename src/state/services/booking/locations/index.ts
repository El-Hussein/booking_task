import {API_URL} from '../../../../constants/keys';
import HttpClient from '../../../../utils/HttpClient';

export const fetchLocationListingAPI = () => {
  return HttpClient.get(`${API_URL}external-meetingroom?cmd=getLocations`).then(
    res => res.data,
  );
};
