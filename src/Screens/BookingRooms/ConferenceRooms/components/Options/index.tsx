import React, {useEffect} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dates} from '../../../../../constants/data';
import AppText from '../../../../../components/AppText';
import DropDownModal, {
  DropDownItem,
} from '../../../../../components/DropDownModal';
import {
  fetchLocationListing,
  selectLocationId,
} from '../../../../../state/actions';
import {
  selectConferenceLocations,
  // selectConferenceLocationsLoading,
} from '../../../../../state/selectors';
import styles from './styles';

const Options = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState<DropDownItem>();
  const [selectedDate, setSelectedDate] = useState<DropDownItem>(dates[0]);
  // const conferenceLocationsLoading = useSelector(
  //   selectConferenceLocationsLoading,
  // );
  const conferenceLocationRooms = useSelector(selectConferenceLocations);

  useEffect(() => {
    dispatch(fetchLocationListing());
  }, [dispatch]);

  const selectLocation = (item: DropDownItem) => {
    setSelectedLocation(item);
    dispatch(selectLocationId(item.value));
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <AppText style={styles.title}>Location </AppText>
        <DropDownModal
          data={conferenceLocationRooms.map(location => {
            return {id: location.id, name: location.name, value: location.id};
          })}
          onSelect={selectLocation}
          selected={selectedLocation}
          placeholder="select Location"
        />
      </View>
      <View style={styles.rowView}>
        <AppText style={styles.title}>Date </AppText>
        <DropDownModal
          data={dates}
          onSelect={item => setSelectedDate(item)}
          selected={selectedDate}
          placeholder="date"
        />
      </View>
    </View>
  );
};

export default Options;
