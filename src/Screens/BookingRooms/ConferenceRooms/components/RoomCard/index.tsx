import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TimeLine, {TimePeriod} from '../../../../../components/TimeLine';
import AppText from '../../../../../components/AppText';
import {Room} from '../../../../../types';
import styles from './styles';

interface RoomCardProps {
  room: Room;
  isFocused: boolean;
  selectRoom: (roomId: number) => void;
  setSelectedTimePeriod: (timePeriod: TimePeriod) => void;
}

const RoomCard: FC<RoomCardProps> = ({
  room,
  isFocused,
  selectRoom,
  setSelectedTimePeriod,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.roomHeader}>
        <Image source={{uri: room.image_link}} style={styles.roomImage} />
        <View style={styles.roomData}>
          <AppText style={styles.roomName}>{room.name}</AppText>
          <View style={styles.roomSecondaryData}>
            <Ionic name="people-outline" size={16} />
            <AppText style={styles.maxPeople}>{room.max_people_number}</AppText>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ConferenceRoomDetails', {room: room})
          }
          style={styles.moreButton}>
          <MaterialIcons name="arrow-drop-down" size={18} />
          <AppText>More</AppText>
        </TouchableOpacity>
      </View>
      <TimeLine
        isFocused={isFocused}
        selectRoom={() => selectRoom(room.id)}
        onSelect={timePeriod => setSelectedTimePeriod(timePeriod)}
      />
    </View>
  );
};

export default RoomCard;
