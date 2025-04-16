import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import {LaunchScreen} from '../components';
import TabNavigationStack from './TabNavigationStack';

const Stack = createNativeStackNavigator();

const MovieStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={LaunchScreen} name={NavigationStrings.Launch} />

      <Stack.Screen
        name={NavigationStrings.TAB}
        component={TabNavigationStack}
      />
    </Stack.Navigator>
  );
};

export default MovieStack;
