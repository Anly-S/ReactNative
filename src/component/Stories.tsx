import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
const stories = [
  {
    id: '1',
    title: 'Your Story',
    imageUrl:
      'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg',
  },
  {
    id: '2',
    title: 'Hari Lee',
    imageUrl:
      'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg',
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
      'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png',
  },
  {
    id: '4',
    title: 'Monica Geller',
    imageUrl:
      'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg',
  },
  {
    id: '5',
    title: 'Ross',
    imageUrl:
      'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg',
  },
  {
    id: '7',
    title: 'Rach',
    imageUrl:
      'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg',
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
    padding: 5,
  },
  item: {
    padding: 6,
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
