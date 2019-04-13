import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
//import { LinearGradient } from 'expo';

import tabBarIcon from './tabBarIcon';

// const createScreen = ({ icon }) => {
//   return class SomeScreen extends React.Component {
//     static navigationOptions = {
//       tabBarIcon: tabBarIcon(icon),
//     };

//     render() {
//       return (
//         <View style={styles.container}>
//           <Text style={styles.text}>Hello</Text>
//         </View>
//       );
//     }
//   };
// };

export default class Second extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('inbox'),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

// export const Third = createScreen({
//   icon: 'favorite',
//   colors: ['#4c669f', '#3b5998', '#192f6a'],
//   title: 'You will not learn anything from this video',
// });

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
