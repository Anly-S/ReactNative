import React from 'react';
import Login from '../InstaProject/src/screens/Login';
import HeaderComponent from './src/component/Header';
import Stories from './src/component/Stories';
import Feeds from './src/component/Feeds';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <HeaderComponent />
      <Stories />
      <Feeds />
    </View>
  );
  // return <Login />;
};

export default App;
