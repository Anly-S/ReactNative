import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {getFeedsAPI} from '../network/ApiHooks';
import {useState, useEffect} from 'react';
import {SectionList} from 'react-native';

type ItemProps = {title: string; imageUrl: string};

const Item = ({title, imageUrl}: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.imageUrl} source={{uri: imageUrl}}></Image>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Stories = () => {
  const [storyList, setStoryList] = useState<any[]>([]);
  useEffect(() => {
    console.log('effect activated');
    const getStories = async () => {
      try {
        const {contentResp, errorMessage} = await getFeedsAPI(
          'v1/e4cf6dd8-ac8c-472c-bcf0-62adf77b1f2a',
        );
        setStoryList(contentResp);
        // console.log(feedList[0].feedImage);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getStories();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.storyHead}>Stories</Text>
      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={storyList}
        renderItem={({item}) => (
          <Item title={item.title} imageUrl={item.imageUrl} />
        )}
        keyExtractor={item => item.id}
      /> */}
      <SectionList
        sections={[{data: storyList}]}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item}) => (
          <Item title={item.title} imageUrl={item.imageUrl} />
        )}
        // renderSectionHeader={() => (
        //   <Text style={styles.storyHead}>Stories</Text>
        // )}
        keyExtractor={(item, index) => index.toString()}
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
