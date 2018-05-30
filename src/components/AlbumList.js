import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

  componentWillMount() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=jazz&api_key=b52d1dca839938408e89902843289ea8&format=json')
     .then(response => response.json())
     .then((responseData) => {
       console.log(responseData.albums.album);
     })
     .catch((error) => {
       console.log(error);
     });
   }

  render() {
    return (
      <View>
      <Text>here is the album list component</Text>
      </View>
    );
  }
}

export default AlbumList;
