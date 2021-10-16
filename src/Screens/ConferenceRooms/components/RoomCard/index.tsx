import React, {FC} from 'react';
import {View} from 'react-native';
import AppText from '../../../../components/AppText';
import {Location} from '../../../../types';
import styles from './styles';

interface RoomCardProps {
  locationRoom: Location;
}

const RoomCard: FC<RoomCardProps> = ({locationRoom}) => {
  return (
    <View style={styles.container}>
      <AppText>{locationRoom.name}</AppText>
    </View>
  );
};

export default RoomCard;
