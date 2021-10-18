import React, {FC} from 'react';
import {useState} from 'react';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList, TouchableOpacity, View} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

interface TimeLineProps {
  onSelect: (timePeriod: TimePeriod) => void;
  selectRoom: () => void;
  isFocused: boolean;
}

export interface TimePeriod {
  start: number;
  end: number;
}

const TimeLine: FC<TimeLineProps> = ({onSelect, isFocused, selectRoom}) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<TimePeriod>({
    start: 0,
    end: 1,
  });

  const onChangeTime = (index: number) => {
    let timePeriod: TimePeriod;
    selectRoom();
    if (
      Math.abs(selectedTimePeriod.start - index) >
      Math.abs(selectedTimePeriod.end - index)
    ) {
      timePeriod = {start: selectedTimePeriod.start, end: index};
    } else {
      timePeriod = {start: index, end: selectedTimePeriod.end};
    }
    setSelectedTimePeriod(timePeriod);
    onSelect(timePeriod);
  };

  return (
    <View style={styles.container}>
      {isFocused && (
        <>
          <TouchableOpacity
            onPress={() => {
              let timePeriod = {
                start: Math.max(selectedTimePeriod.start - 1, 0),
                end: selectedTimePeriod.end,
              };
              setSelectedTimePeriod(timePeriod);
              onSelect(timePeriod);
            }}
            style={[styles.changePeriod, styles.increment]}>
            <FontAwesome name="minus" size={14} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              let timePeriod = {
                start: selectedTimePeriod.start,
                end: Math.min(selectedTimePeriod.end + 1, 96),
              };
              setSelectedTimePeriod(timePeriod);
              onSelect(timePeriod);
            }}
            style={[styles.changePeriod, styles.decrement]}>
            <FontAwesome name="plus" size={14} />
          </TouchableOpacity>
        </>
      )}
      <FlatList
        horizontal
        data={Array.from({length: 96}, (_, i) => i * 15)}
        renderItem={({item, index}) => (
          <>
            {/* main body */}
            <View style={[styles.timeSlot]}>
              {/* selected aria */}
              <>
                {(index === selectedTimePeriod.end ||
                  index === selectedTimePeriod.start) && (
                  <View style={styles.periodEdge}>
                    <View style={styles.periodEdgeCircle} />
                  </View>
                )}
                {index > selectedTimePeriod.start - 1 &&
                  index < selectedTimePeriod.end && (
                    <View style={styles.selectedAria} />
                  )}
              </>
              {index % 2 === 0 ? (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => onChangeTime(index)}
                  style={styles.fullLineSlotButton}>
                  <View style={styles.fullLine} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => onChangeTime(index)}
                  style={styles.halfLineSlotButton}>
                  <View style={styles.halfLine} />
                </TouchableOpacity>
              )}
            </View>
            {/* info data */}
            {!(index % 2) && (
              <AppText style={styles.timeSlotText}>
                {moment().startOf('day').add(item, 'minutes').format('HH:mm')}
              </AppText>
            )}
          </>
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default TimeLine;
