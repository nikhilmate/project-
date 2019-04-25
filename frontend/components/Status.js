import React from 'react';
import { Text, View, StyleSheet,Alert, Platform, AsyncStorage, ScrollView, CameraRoll, Image, FlatList } from 'react-native';
import { Constants } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import tabBarIcon from './tabBarIcon';

class Status extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('inbox')
  };

  constructor(props){
    super(props);
    this.state = {
      image: null,
      email : null
    };
  }
  
  componentDidUpdate(prevState) {
    if(prevState.image !== this.state.image) {
      console.log(this.state.image);
      if(this.state.image !== null) {
        const data = new FormData();
        data.append("email", this.state.email);
        data.append("pic", {
          uri: this.state.image[0].node.image.uri,
          type: "image/*", 
          name: "temp.jpg"
        });
        fetch('http://192.168.43.64:3134/sendImage', {
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
      }
    }
  }

  componentDidMount(){
    AsyncStorage.getItem('Istate').then(data => {
      let odata = JSON.parse(data);
      this.setState({
        email: odata.email
      });
    });
    CameraRoll.getPhotos({
      first: 1,
      assetType: "All"
    }).then(r => this.setState({ image: r.edges }));
  }

  render() {
    const { image } = this.state;
    console.log(11, image);
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}>this is status</Text>
          {
            this.state.image !== null &&
            <ScrollView>
              <Image
                style={{
                  width: 245,
                  height: 245
                }}
                source={{ uri: this.state.image[0].node.image.uri }}
              />
            </ScrollView>
          }
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