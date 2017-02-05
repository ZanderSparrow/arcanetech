import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { entryCreate } from '../actions';

class EntryCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Name'}
            placeholder={'Name the technology.'}
          />
        </CardSection>
        <CardSection>
          <Input 
            label={'Function'}
            placeholder={'Describe what the arcane technology does.'}
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

export default connect(null, { entryCreate })(EntryCreate);
