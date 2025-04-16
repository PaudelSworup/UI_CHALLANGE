import {View, Text} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/NavigationService';
import MovieStack from './MovieStack';
import {Navbar} from '../components';

const Route = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef}>
        <Navbar />
        <MovieStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Route;
