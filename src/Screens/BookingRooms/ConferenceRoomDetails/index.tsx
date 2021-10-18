/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import AppText from '../../../components/AppText';
import ImageSlider from '../../../components/ImageSlider';
import Header from '../../../components/Header';
import {Room} from '../../../types';
import styles from './styles';
import TimeLine, {TimePeriod} from '../../../components/TimeLine';
import DropDownModal, {DropDownItem} from '../../../components/DropDownModal';
import {dates} from '../../../constants/data';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {calcRoomCost} from '../../../state/actions';
import {
  selectCalcRoomCostLoading,
  selectCalculatedRoomCost,
} from '../../../state/selectors/booking/rooms';
import {ActivityIndicator} from 'react-native';
import BookButton from '../../../components/BookButton';

const ConferenceRoomDetails = () => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const room: Room = params.room;
  const [selectedDate, setSelectedDate] = useState<DropDownItem>(dates[0]);
  const [selectedRoom, setSelectedRoom] = useState<number>(0);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<TimePeriod>();
  const calculatedCost = useSelector(selectCalculatedRoomCost);
  const calcRoomCostLoading = useSelector(selectCalcRoomCostLoading);

  useEffect(() => {
    dispatch(calcRoomCost(room.id, selectedDate.value, selectedTimePeriod));
  }, [selectedTimePeriod]);

  return (
    <View style={styles.container}>
      <Header title={room.name} />
      <ImageSlider slides={[room.image_link]} />
      <View style={styles.mainDataContainer}>
        <View style={styles.roomHeader}>
          <Image source={{uri: room.image_link}} style={styles.roomImage} />
          <View style={styles.roomData}>
            <AppText style={styles.roomName}>{room.name}</AppText>
            <View style={styles.roomSecondaryData}>
              <Ionic name="people-outline" size={16} />
              <AppText style={styles.maxPeople}>
                {room.max_people_number}
              </AppText>
            </View>
            <View style={styles.roomSecondaryData}>
              <AppText style={styles.costText}>cost</AppText>
              {calcRoomCostLoading ? (
                <ActivityIndicator style={{marginHorizontal: 10}} size={12} />
              ) : (
                <AppText style={styles.maxPeople}>
                  {calculatedCost.toFixed(2)}
                </AppText>
              )}
              <AppText style={styles.maxPeople}>Credits</AppText>
            </View>
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
        <TimeLine
          isFocused
          selectRoom={() => setSelectedRoom(room.id)}
          onSelect={timePeriod => setSelectedTimePeriod(timePeriod)}
        />
      </View>
      <BookButton
        selectedRoom={selectedRoom}
        selectedTimePeriod={selectedTimePeriod}
      />
    </View>
  );
};

export default ConferenceRoomDetails;
