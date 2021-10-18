import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from '../AppText';
import styles from './styles';
import {colors} from '../../constants/colors';

const NetStatus = React.memo(() => {
  const [isReady, setIsReady] = useState(false);

  const netInfo = useNetInfo();

  useEffect(() => {
    if (isReady) {
      setIsReady(false);
    }
  }, [netInfo.isConnected, isReady]);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return netInfo.isConnected ? null : (
    <View style={styles.container}>
      <View style={styles.connection}>
        <Icon name="md-close-circle" size={30} color={colors.error} />
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    </View>
  );
});

export default NetStatus;
