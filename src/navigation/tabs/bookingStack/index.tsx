import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConferenceRooms from '../../../Screens/BookingRooms/ConferenceRooms';
import ConferenceRoomDetails from '../../../Screens/BookingRooms/ConferenceRoomDetails';

const Stack = createStackNavigator();

const BookingStack = ({routeName}) => {
  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={() => ({
        headerShown: false,
        header: null,
      })}>
      <Stack.Screen name="ConferenceRooms" component={ConferenceRooms} />
      <Stack.Screen
        name="ConferenceRoomDetails"
        component={ConferenceRoomDetails}
      />
    </Stack.Navigator>
  );
};

export default BookingStack;
