import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/Ionicons';
import {showMessage} from 'react-native-flash-message';
import AppText from '../AppText';
import styles from './styles';
import {setKey, getKey} from '../../utils/async-storage.helpers';
import {IS_OFFLINE} from '../../constants/keys';
import {colors} from '../../constants/colors';

const NetStatus = React.memo(() => {
  const [isReady, setIsReady] = useState(false);

  const netInfo = useNetInfo();

  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        getKey(IS_OFFLINE).then(isOffline => {
          if (isOffline === 'true') {
            setKey(IS_OFFLINE, 'false');
          }
          if (netInfo.isConnected && isOffline === 'true') {
            showMessage({
              message: 'Back Online',
              type: 'success',
              titleStyle: {
                textAlign: 'center',
                width: '100%',
              },
              duration: 1000,
            });
          }
        });
      }, 1000);
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
