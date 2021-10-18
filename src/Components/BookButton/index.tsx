import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../AppText';
import styles from './styles';
import moment from 'moment';
import {TimePeriod} from '../TimeLine';

interface BookButtonProps {
  selectedRoom: number;
  selectedTimePeriod: TimePeriod;
}

const BookButton: FC<BookButtonProps> = ({
  selectedRoom,
  selectedTimePeriod,
}) => {
  return (
    !!selectedRoom && (
      <TouchableOpacity style={styles.bookingBox}>
        <AppText style={styles.bookingBoxText}>
          Book{' '}
          {moment()
            .startOf('day')
            .add(selectedTimePeriod.start * 15, 'minutes')
            .format('HH:mm')}{' '}
          -{' '}
          {moment()
            .startOf('day')
            .add(selectedTimePeriod.end * 15, 'minutes')
            .format('HH:mm')}
        </AppText>
      </TouchableOpacity>
    )
  );
};

export default BookButton;
