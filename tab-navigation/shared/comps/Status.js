import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import tabBarIcon from '../tabBarIcon';

class Status extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('inbox'),
  };
  
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}>this is status</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Status;