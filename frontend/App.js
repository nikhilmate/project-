import * as React from 'react';
import { Text, Button, View, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { Constants } from 'expo';
//var JSON = require("json");
import Register from './components/Register';
import Check from './components/Check';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'registered' : false //,
      //'email' : null
    };
  }

  storeData() {
    let data = {
      'registered' : false,
      'email' : null
    }
    AsyncStorage.setItem('Istate', JSON.stringify(data))
    .then(() => Alert.alert('in success'))
    .catch((err) => Alert.alert(`Error name: ${err.name}`, `Error message: $          {err.message}`));
  }

  async getData()  {
    AsyncStorage.getItem('Istate').then((token) => {
      this.setState({ registered: token !== null })
    });
    // let val = await AsyncStorage.getItem('Istate');
    // if(val !== null) {
    //   this.setState({ 
    //     registered: val.registered,
    //     email : val.email
    //     });
    //   Alert.alert(11, val);
    //   // this.setState({ email : val}, function () {
    //   //Alert.alert(this.state.email)
    //   // });
    // } else {
    //   Alert.alert('11');
    // }
    //Alert.alert(11, this.state);
  }  

  

  componentDidUpdate(){
  //   this.getData();
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ registered: token !== null })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Check 
            registered={this.state.registered}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  }
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});

/*

//email={this.state.email}

<Register 
          user={this.state.email ? this.state.email : 'Guest'}
        />

<Button
          title="start"
          onPress={this.storeData}
        />
        <Button
          color="red"
          title="Pick"
          onPress={this.getData}
        />
*/