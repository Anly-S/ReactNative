import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
const stories = [
  {
    id: '1',
    title: 'Your Story',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
  {
    id: '2',
    title: 'Hari Lee',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
  {
    id: '3',
    title: 'Joey',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
  {
    id: '6',
    title: 'Changler Bing',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
  {
    id: '4',
    title: 'Monica Geller',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
  {
    id: '5',
    title: 'Ross',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
  {
    id: '7',
    title: 'Rach',
    imageUrl:
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
  },
];
type ItemProps = {title: string; imageUrl: string};

const Item = ({title, imageUrl}: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.imageUrl} source={{uri: imageUrl}}></Image>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Stories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.storyHead}>Stories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={stories}
        renderItem={({item}) => (
          <Item title={item.title} imageUrl={item.imageUrl} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 10,
    alignItems: 'center',
  },
  storyHead: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  imageUrl: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'green',
  },
});

export default Stories;
