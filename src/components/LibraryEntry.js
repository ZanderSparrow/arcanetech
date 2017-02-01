import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class LibraryEntry extends Component {

  render() {
    let {title, description} = this.props.library;
    return (
      <Card>
        <CardSection>
          <Text style={styles.titleStyle}>{title}</Text>
        </CardSection>
        
        <CardSection>
          <Text>{description}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default LibraryEntry;
