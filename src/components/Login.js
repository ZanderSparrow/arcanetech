import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class Login extends Component {
  onEmail(text) {
    this.props.emailChanged(text);
  }

  onPassword(text) {
    this.props.passwordChanged(text);
  }

  onLogin() {
    this.props.loginUser();
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
          <Button onPress={this.onLogin.bind(this)}>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);