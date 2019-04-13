import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { First, Second, Third } from '../shared/Screens';
import { StyleSheet } from 'react-native';

const simpleStyledConfig = {
  shifting: false,
  activeColor: '#6200ee',
  inactiveColor: '#828792',
  barStyle: {
    backgroundColor: '#f8f7f9',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#d0cfd0',
  },
};

const shiftingConfig = {
  shifting: false,
  labeled: false,
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
};

// https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
export default createMaterialBottomTabNavigator(
  {
    First,
    Second,
    Third,
  },
  simpleStyledConfig
  //shiftingConfig
);
