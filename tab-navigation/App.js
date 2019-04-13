import React from 'react';
import { createAppContainer } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import Navigator from './navigators/Navigator1';
import { Constants } from 'expo';

// https://reactnavigation.org/

const App = createAppContainer(Navigator);

// export default App;

export default () => (
  <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
    <App />
  </View>
);

/*
class Main extends React.Component {
  constructor(){
    this.state={};
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <View>
      </View>
    );
  }
}
*/