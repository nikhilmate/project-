import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { ImagePicker } from 'expo';
import Axios from 'axios';

export default class AssetExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email   : '',
      image: null
    }
  }

  onClickListener = () => {
    // Axios({
    //   method: 'post',
    //   url: 'http://192.168.43.64:3134/register',
    //   data: JSON.stringify({
    //     fullname : this.state.fullName,
    //     email : this.state.email,
    //     image : this.state.image 
    //   }),
    //   header: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // .then(res => {
    //   Alert.alert(res);
    // })
    const data = new FormData();
    data.append("email", this.state.email);
    data.append("name", this.state.fullName);
    data.append("photo", {
      uri: this.state.image,
      type: "image/*", 
      name: "temp.jpg"
    });
    fetch('http://192.168.43.64:3134/register', {
      method: 'POST',
      body : data
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({
      //   fullname : this.state.fullName,
      //   email : this.state.email,
      //   image : this.state.image 
      // }),
    })
    .then((response) => {
      console.log(11, response);
      let temp = JSON.parse(response._bodyText); 
      if(temp.status === true){
        Alert.alert("user is already present");
      } else {
        let data = {
          fullName: this.state.fullName,
          email   : this.state.email,
          image: this.state.image
        }
        AsyncStorage.setItem('Istate', JSON.stringify(data))
        .then(() => Alert.alert('in success'))
        .catch((err) => Alert.alert(`Error name: ${err.name}`, `Error message: ${err.message}`));

        this.props.changeState();
      }
    });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  // componentDidMount(){
  //   this.getData();
  // }

  render() {
    let image = this.state.image;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>
          Register
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  },
  header:{
    paddingBottom: 20,
    fontSize: 20,
    paddingTop: 20,
    color: 'white',
    textAlign: 'center'
  }
});