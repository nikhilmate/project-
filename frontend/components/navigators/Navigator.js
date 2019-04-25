import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
//import Second from '../shared/Screens';
import Profile from '../Profile';
import Status from '../Status';

// https://reactnavigation.org/docs/en/bottom-tab-navigator.html
export default createBottomTabNavigator(
  {
    Status : { screen: Status },
    Profile : { screen: Profile }
  },
  {
    initialRouteName: 'Status',
    tabBarOptions: {
      // // //' - Label and icon color of the active tab.'
      // activeTintColor: 'orange',
      // // //' - Background color of the active tab.'
      // activeBackgroundColor: 'green',
      // // //' - Label and icon color of the inactive tab.'
      // inactiveTintColor: 'blue',
      // // //' - Background color of the inactive tab.'
      // inactiveBackgroundColor: 'yellow',
      // // //' - Style object for the tab bar.'
      // style: { borderWidth: 2, borderColor: 'purple' },
      // // //' - Style object for the tab label.'
      // labelStyle: { fontWeight: 'bold' },
      // // //' - Style object for the tab.'
      // tabStyle: { paddingBottom: 16 },
      // // //' - Whether to show label for tab, default is true.'
      // showLabel: false,
      // // //' - Whether to show icon for tab, default is true.'
      // showIcon: false,
    },
  }
);
