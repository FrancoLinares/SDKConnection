import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
