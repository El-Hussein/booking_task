import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppText from '../../../components/AppText';
import BookButton from '../../../components/BookButton';
import Header from '../../../components/Header';
import {TimePeriod} from '../../../components/TimeLine';
import {fetchRoomsPerLocation} from '../../../state/actions';
import {selectConferenceLocationsParams} from '../../../state/selectors';
import {
  selectConferenceRoomsPerLocation,
  selectConferenceRoomsPerLocationLoading,
} from '../../../state/selectors/booking/rooms';
import Options from './components/Options';
import RoomCard from './components/RoomCard';
import styles from './styles';

const ConferenceRooms = () => {
  const dispatch = useDispatch();
  const [selectedRoom, setSelectedRoom] = useState<number>(0);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<TimePeriod>();
  const {locationId: selectedLocationId} = useSelector(
    selectConferenceLocationsParams,
  );
  const conferenceRoomsPerLocationLoading = useSelector(
    selectConferenceRoomsPerLocationLoading,
  );
  const conferenceRoomsPerLocation = useSelector(
    selectConferenceRoomsPerLocation,
  );

  useEffect(() => {
    dispatch(fetchRoomsPerLocation(selectedLocationId));
  }, [dispatch, selectedLocationId]);

  return (
    <View style={styles.container}>
      <Header title="Conference Rooms" />
      <Options />
      {conferenceRoomsPerLocationLoading ? (
        <View style={styles.emptyScreen}>
          <ActivityIndicator size={40} />
        </View>
      ) : (
        <FlatList
          style={{width: '100%'}}
          data={conferenceRoomsPerLocation}
          renderItem={({item}) => (
            <RoomCard
              setSelectedTimePeriod={timePeriod =>
                setSelectedTimePeriod(timePeriod)
              }
              isFocused={selectedRoom === item.id}
              selectRoom={roomId => setSelectedRoom(roomId)}
              room={item}
            />
          )}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={() => (
            <View style={styles.emptyScreen}>
              <AppText style={styles.emptyScreenMessage}>
                Sorry we didn't found rooms available in this location try
                another one.
              </AppText>
            </View>
          )}
        />
      )}
      <BookButton
        selectedRoom={selectedRoom}
        selectedTimePeriod={selectedTimePeriod}
      />
    </View>
  );
};

export default ConferenceRooms;
