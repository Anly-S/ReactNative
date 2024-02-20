import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cameraIcon}
        source={require('../assets/camera.png')}
      />
      <Text style={styles.instaHead}>Instagram</Text>
      <Image style={styles.sendIcon} source={require('../assets/send.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  cameraIcon: {
    height: 50,
    width: 50,
    paddingBottom: 20,
  },
  sendIcon: {
    height: 40,
    width: 40,
  },
  instaHead: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HeaderComponent;
