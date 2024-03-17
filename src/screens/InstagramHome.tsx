import React from 'react';
import HeaderComponent from '../component/Header';
import Stories from '../component/Stories';
import Feeds from '../component/Feeds';
import {ScrollView, View} from 'react-native';

const InstaHome = () => {
  return (
    <View>
      <HeaderComponent />
      <Stories />
      <Feeds />
    </View>
  );
};

export default InstaHome;
