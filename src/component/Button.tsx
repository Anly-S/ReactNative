import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ButtonComponent = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
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
