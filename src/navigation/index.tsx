/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {IS_OFFLINE} from '../constants/keys';
import {setKey} from '../utils/async-storage.helpers';
import NetStatus from '../Components/NetStatus';
import {colors} from '../constants/colors';
import AppTabs from './tabs';

const AppRoutes = () => {
  const netInfo = useNetInfo();
  const [noInternet, setNoInternet] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNoInternet(!noInternet);
    }, 200);
  }, [netInfo.isConnected]);

  useEffect(() => {
    if (!netInfo.isConnected) {
      setKey(IS_OFFLINE, 'true');
    }
  }, [noInternet]);

  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: colors.statusBar, flex: 1}}>
        <AppTabs />
      </SafeAreaView>
      <NetStatus />
    </NavigationContainer>
  );
};

export default AppRoutes;
