import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetails = ({ album }) => {
  const { name, artist, image } = album;
  const { thumbnailStyle, headerContentStyle,
          imageViewStyle, albumNameStyle,
          artistNameStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={imageViewStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: image[2]['#text'] }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={albumNameStyle}>{name}</Text>
          <Text style={artistNameStyle}>{artist.name}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(image[2]['#text'])}>
          Remove
        </Button>
      </CardSection>
    </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    width: null
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  albumNameStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  artistNameStyle: {
    fontSize: 18
  }
};

export default AlbumDetails;
