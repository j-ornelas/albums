import React from 'react';
import { Text } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

const AlbumDetails = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.name}</Text>
      </CardSection>
    </Card>
  );
};


export default AlbumDetails;
