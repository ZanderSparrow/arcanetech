import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common';

const Welcome = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Welcome to the Arcane Technologies Library</Text>
      <CardSection>
        <Button onPress={() => Actions.login()}>
          Login
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => Actions.signup()}>
          Signup
        </Button>
      </CardSection>
    </View>
  );
}

const styles = {
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 15
  }
}

export default Welcome;
