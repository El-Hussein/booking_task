import React from 'react';
import {View} from 'react-native';
import AppText from '../../Components/AppText';
import styles from './styles';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <AppText>THIS IS EMPTY SCREEN</AppText>
    </View>
  );
};

export default EmptyScreen;
