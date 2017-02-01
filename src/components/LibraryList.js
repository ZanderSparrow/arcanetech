import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class LibraryList extends Component {
  render() {
    return (
      <ScrollView>
        <Card>
          {this.props.library.map(entry => {
            return (<CardSection key={entry.id}>
              <Text>{entry.title}</Text>
            </CardSection>)
          })}
        </Card>
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
  return { library: state.library };
};

export default connect(mapStateToProps)(LibraryList);
