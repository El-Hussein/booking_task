import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import EmptyScreen from '../../Screens/EmptyScreen';
import BookingStack from './bookingStack';
import {colors} from '../../constants/colors';

const Tabs = createBottomTabNavigator();

const AppTabs = () => (
  <Tabs.Navigator
    initialRouteName="Booking"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.activeTabTintColor,
      tabBarInactiveTintColor: colors.inactiveTabTintColor,
      tabBarStyle: {backgroundColor: '#fff'},
      tabBarItemStyle: {
        borderRightColor: colors.inactiveTabTintColor,
        borderRightWidth: 1,
        height: '60%',
        alignSelf: 'center',
      },
      headerShown: false,
    }}>
    <Tabs.Screen
      name="Menu"
      options={{
        tabBarIcon: ({color}) => (
          <Ionic name="menu-outline" size={24} color={color} />
        ),
      }}
      component={EmptyScreen}
    />
    <Tabs.Screen
      options={{
        tabBarBadge: 29,
        tabBarBadgeStyle: {
          top: -5,
          fontSize: 12,
        },
        tabBarIcon: ({color}) => (
          <Ionic name="notifications-outline" size={24} color={color} />
        ),
      }}
      name="Notifications"
      component={EmptyScreen}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color}) => (
          <Ionic name="home-outline" size={24} color={color} />
        ),
      }}
      name="Home"
      component={EmptyScreen}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunity
            name="calendar-month-outline"
            size={24}
            color={color}
          />
        ),
      }}
      name="Booking"
      component={BookingStack}
    />
    <Tabs.Screen
      options={{
        tabBarItemStyle: {
          borderRightWidth: 0,
        },
        tabBarIcon: ({color}) => (
          <Ionic name="key-outline" size={23} color={color} />
        ),
      }}
      name="settings"
      component={EmptyScreen}
    />
  </Tabs.Navigator>
);

export default AppTabs;
