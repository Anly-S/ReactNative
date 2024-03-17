import React from 'react';
import {useState, useEffect} from 'react';
import {getFeedsAPI} from '../network/ApiHooks';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SectionList,
} from 'react-native';

type ItemProps = {
  title: string;
  imageUrl: string;
  id: string;
  feedImage: string;
  likeCount: string;
};

const Item = ({title, imageUrl, id, feedImage, likeCount}: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.profileContent}>
      <Image style={styles.imageUrl} source={{uri: imageUrl}} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <Image style={styles.feedImage} source={{uri: feedImage}} />
    <View style={styles.iconSession}>
      <Image style={styles.icon} source={require('../assets/like.png')} />
      <Image style={styles.icon} source={require('../assets/comment.png')} />
      <Image style={styles.icon} source={require('../assets/share.png')} />
      <Image style={styles.iconSave} source={require('../assets/save.png')} />
    </View>
    <Text style={styles.likeCount}>{likeCount} Likes</Text>
  </View>
);

const Feeds = () => {
  const [feedList, setFeedList] = useState<any[]>([]);
  useEffect(() => {
    console.log('effect activated');
    const getFeeds = async () => {
      try {
        const {contentResp, errorMessage} = await getFeedsAPI(
          'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
        );
        setFeedList(contentResp);
        // console.log(feedList[0].feedImage);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getFeeds();
  }, []);
  return (
    <View style={styles.container}>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={feedList}
        renderItem={({item}) => (
          <Item
            title={item.title}
            imageUrl={item.imageUrl}
            id={item.id}
            feedImage={item.feedImage}
            likeCount={item.likeCount}
          />
        )}
        keyExtractor={item => item.id}
      /> */}
      <SectionList
        sections={[{data: feedList}]}
        renderItem={({item}) => (
          <Item
            title={item.title}
            imageUrl={item.imageUrl}
            id={item.id}
            feedImage={item.feedImage}
            likeCount={item.likeCount}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    padding: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 15,
    color: 'black',
    marginLeft: 8,
  },
  imageUrl: {
    height: 60,
    width: 60,
    padding: 20,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'green',
  },
  feedImage: {
    height: 400,
    width: '100%',
    marginTop: 10,
  },
  likeCount: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  iconSession: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  iconSave: {
    width: 30,
    height: 30,
    marginLeft: '55%',
  },
  profileContent: {
    flexDirection: 'row',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
});
export default Feeds;
