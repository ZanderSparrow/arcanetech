import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class Login extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'email'}
            placeholder={'name@example.com'}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            label={'password'}
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