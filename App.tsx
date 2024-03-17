import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackMavigation} from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackMavigation />
    </NavigationContainer>
  );
};

export default App;
