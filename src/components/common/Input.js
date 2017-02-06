import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, placeholder, value, onChange, secure, style }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={[containerStyle, style]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        secureTextEntry={secure}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChange}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };