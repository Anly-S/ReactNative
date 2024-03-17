import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ButtonComponent = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('we are here' + count);
    navigation.navigate('InstaHome', {});
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
    marginTop: 10,
  },
});

export default ButtonComponent;
