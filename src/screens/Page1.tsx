import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const Page1 = () => {
  const [response, setResponse] = useState<any>(null);

  const browseImage = () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 0}, res => {
      if (!res.didCancel) {
        setResponse(res);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.browse} onPress={browseImage}>
        <Text style={styles.browseText}>BROWSE IMAGE</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {response?.assets &&
          response?.assets.map(({uri}: {uri: string}) => (
            <View key={uri} style={styles.imageWrapper}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{uri: uri}}
              />
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  browse: {
    alignItems: 'center',
    backgroundColor: '#A1D5E3',
    padding: 15,
    margin: 15,
    marginTop: '10%',
    borderRadius: 8,
  },
  browseText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
  },
  imageWrapper: {
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Page1;
