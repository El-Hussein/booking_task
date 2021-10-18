import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import NetStatus from '../components/NetStatus';
import {colors} from '../constants/colors';
import AppTabs from './tabs';

const AppRoutes = () => {
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
