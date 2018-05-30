import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=jazz&api_key=b52d1dca839938408e89902843289ea8&format=json')
     .then(response => response.json())
     .then((responseData) => {
       console.log('fetch data', responseData.albums.album);
       console.log('state will mount', this.state.albums);
       this.setState({ albums: responseData.albums.album });
     })
     .then(() => {
       console.log('state will mount 2', this.state.albums);
     })
     .catch((error) => {
       console.log(error);
     });
   }

   renderlist() {
     return this.state.albums.map((album, index) => <AlbumDetails key={index} album={album} />);
   }

  render() {
    return (
      <View>
        {this.renderlist()}
      </View>
    );
  }
}

export default AlbumList;
