import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ButtonComponent from '../component/Button';

const ViewBoxesWithColorAndText = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="email  "
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="password"
      />
      <Text>Forgot password?</Text>
      <ButtonComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 300,
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ViewBoxesWithColorAndText;
