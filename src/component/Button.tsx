import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ButtonComponent = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('we are here' + count);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>LOGIN</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDD',
    padding: 10,
  },
});

export default ButtonComponent;
