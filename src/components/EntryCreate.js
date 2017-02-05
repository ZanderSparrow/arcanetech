import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { entryCreate, entryEdit } from '../actions';

class EntryCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Name'}
            placeholder={'Name the technology.'}
            value={this.props.title}
            onChangeText={() => entryEdit({ prop: 'title', value })}
          />
        </CardSection>
        <CardSection>
          <Input 
            label={'Function'}
            placeholder={'Describe what the arcane technology does.'}
            value={this.props.description}
            onChangeText={() => entryEdit({ prop: 'description', value })}
          />
        </CardSection>
        <CardSection>
          <Button>
            Add to Library
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  let { title, description } = state.entry;

  return { title, description };
};

export default connect(mapStateToProps, { entryCreate, entryEdit })(EntryCreate);
