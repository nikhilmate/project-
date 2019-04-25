import * as React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  AsyncStorage,
  Alert,
} from 'react-native';
import { Constants } from 'expo';
import { createAppContainer } from 'react-navigation';
import Register from './Register';

import Navigator from './navigators/Navigator';

const App = createAppContainer(Navigator);

export default class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: props.registered,
      email: '',
      image: null,
      response : null
    };
  }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.registered !== this.props.registered){
  //     this.setState({
  //       registered: nextProps.registered,
  //       email : nextProps.email
  //     });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps !==prevState){
  //     return nextProps;
  //   } else{
  //     return prevState;
  //   }
  // }

  // componentDidUpdate() {
  //   if(this.state.registered === true) {
  //      AsyncStorage.getItem('Istate').then((data) => {
  //        this.setState({
  //          email : data.email
  //        })
  //      })
  //   }
  // }

  storeData() {
    AsyncStorage.setItem('user', 'coolnikim@gmail.com')
      .then(() => Alert.alert('in success'))
      .catch(err =>
        Alert.alert(
          `Error name: ${err.name}`,
          `Error message: $          {err.message}`
        )
      );
  }
 
  changeState = () => {
    AsyncStorage.getItem('Istate').then(data => {
      let odata = JSON.parse(data);
      this.setState({
        registered: true,
        email: odata.email
      });
    });
  };

  render() {
    if (this.state.registered === false) {
      return (
        <View style={styles.container}>
          <Register changeState={this.changeState} />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <App />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
});
