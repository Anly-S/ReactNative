import React, {useEffect, useState} from 'react';
import HeaderComponent from '../component/Header';
import {
  FlatList,
  Image,
  SectionList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {getFeedsAPI} from '../network/ApiHooks';

const InstaHomePage = () => {
  const [feedList, setFeedList] = useState<any[]>([]);
  const [storyList, setStoryList] = useState<any[]>([]);

  useEffect(() => {
    const getFeeds = async () => {
      try {
        const {contentResp, errorMessage} = await getFeedsAPI(
          'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
        );
        setFeedList(contentResp);
      } catch (error) {
        console.error('Error:', error);
      }
    };
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
    getFeeds();
  }, []);

  const sectionListData = [
    {
      title: 'Stories',
      renderHorizontal: true,
      data: [storyList],
    },
    {
      title: 'Feeds',
      data: [feedList],
    },
  ];

  return (
    <>
      <HeaderComponent />
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item.id + index}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold', fontSize: 40}}>{title}</Text>
        )}
        renderItem={({item, section}) => {
          if (section.renderHorizontal) {
            return (
              <FlatList
                horizontal
                data={item}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={styles.sitem}>
                    <Image
                      style={styles.simageUrl}
                      source={{uri: item.imageUrl}}></Image>
                    <Text style={styles.stitle}>{item.title}</Text>
                  </View>
                )}
                keyExtractor={item => item.id.toString}
              />
            );
          } else {
            return (
              <FlatList
                data={item}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={styles.item}>
                    <View style={styles.profileContent}>
                      <Image
                        style={styles.imageUrl}
                        source={{uri: item.imageUrl}}
                      />
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <Image
                      style={styles.feedImage}
                      source={{uri: item.feedImage}}
                    />
                    <View style={styles.iconSession}>
                      <Image
                        style={styles.icon}
                        source={require('../assets/like.png')}
                      />
                      <Image
                        style={styles.icon}
                        source={require('../assets/comment.png')}
                      />
                      <Image
                        style={styles.icon}
                        source={require('../assets/share.png')}
                      />
                      <Image
                        style={styles.iconSave}
                        source={require('../assets/save.png')}
                      />
                    </View>
                    <Text style={styles.likeCount}>{item.likeCount} Likes</Text>
                  </View>
                )}
                keyExtractor={item => item.id.toString}
              />
            );
          }
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  scontainer: {
    padding: 5,
  },
  sitem: {
    padding: 6,
    alignItems: 'center',
  },
  storyHead: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
  },
  stitle: {
    fontSize: 15,
    color: 'black',
  },
  simageUrl: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'green',
  },
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
export default InstaHomePage;
