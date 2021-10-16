import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLocationListing} from '../../state/actions/booking/locations';
import {
  selectConferenceLocationRooms,
  selectConferenceLocationRoomsLoading,
} from '../../state/selectors';
import RoomCard from './components/RoomCard';
import styles from './styles';

const ConferenceRooms = () => {
  const conferenceLocationRoomsLoading = useSelector(
    selectConferenceLocationRoomsLoading,
  );
  const conferenceLocationRooms = useSelector(selectConferenceLocationRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationListing());
  }, [dispatch]);

  console.log(conferenceLocationRoomsLoading, conferenceLocationRooms);

  return (
    <View style={styles.container}>
      <FlatList
        data={conferenceLocationRooms}
        renderItem={({item}) => <RoomCard locationRoom={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default ConferenceRooms;
