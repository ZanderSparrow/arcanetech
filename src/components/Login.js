import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class Login extends Component {
  onEmail(text) {
    this.props.emailChanged(text);
  }

  onPassword(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'}
            placeholder={'name@example.com'}
            onChange={this.onEmail.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
            onChange={this.onPassword.bind(this)}
            value={this.props.password}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);