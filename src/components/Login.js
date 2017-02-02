import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class Login extends Component {
  onEmail(text) {

  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'}
            placeholder={'name@example.com'}
            onChange={this.onEmail.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default Login;