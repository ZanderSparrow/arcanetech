import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';

class LibraryEntry extends Component {

  render() {
    let {id, title, description} = this.props.library;
    return (
      <Card>
        <TouchableWithoutFeedback
          onPress={() => this.props.selectEntry(id)}
        >
          <View>
            <CardSection>
              <Text style={styles.titleStyle}>{title}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        
        {this.props.selection === id && <CardSection>
                  <Text>{description}</Text>
                </CardSection>}
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

const mapStateToProps = state => {
  return {
    selection: state.selection
  }
};

export default connect(mapStateToProps, actions)(LibraryEntry);
