import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConferenceRooms from '../../../Screens/ConferenceRooms';
import ConferenceRoomDetails from '../../../Screens/ConferenceRoomDetails';

const Stack = createStackNavigator();

const BookingStack = ({routeName}) => {
  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={() => ({
        headerShown: false,
        header: null,
      })}>
      <Stack.Screen name="SelectLocation" component={ConferenceRooms} />
      <Stack.Screen name="AppTabs" component={ConferenceRoomDetails} />
    </Stack.Navigator>
  );
};

export default BookingStack;
