import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation,
  UIManager } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { selectEntry } from '../actions';

class LibraryEntry extends Component {
  componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }

  render() {
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);

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
        
        {this.props.selected && <CardSection>
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

const mapStateToProps = (state, ownProps) => {
  const selected = state.selection === ownProps.library.id;
  return {
    selected
  }
};

export default connect(mapStateToProps, { selectEntry })(LibraryEntry);
