import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

const LibraryEntry = ({library}) => {
  let {title, description} = library;

  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
        <Text>{description}</Text>
      <CardSection>
      </CardSection>
    </Card>
  );
}

export default LibraryEntry;
