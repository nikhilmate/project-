import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { First, Second, Third } from '../shared/Screens';

// https://reactnavigation.org/docs/en/material-top-tab-navigator.html
export default createMaterialTopTabNavigator(
  {
    First,
    Second,
    Third,
  },
  {
    // tabBarPosition: 'bottom',
    // animationEnabled: true,
    // swipeEnabled: true,
  }
);
