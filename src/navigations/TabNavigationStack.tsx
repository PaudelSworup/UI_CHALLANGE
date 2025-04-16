import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStrings from '../constants/NavigationStrings';
import {getTabBarIcon} from '../utils/TabNavigationHelper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  FootScreen,
  HomeScreen,
  MapScreen,
  NetworkScreen,
  NotificationScreen,
} from '../components';

const Tab = createBottomTabNavigator();

const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName={NavigationStrings.HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route.name, focused, size, color),
        tabBarLabel: () => null,
        tabBarActiveTintColor: '#154b3f',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          height: hp(8), // Increase the height of the tab bar
          backgroundColor: 'white', // Customize the background color if needed
        },
      })}>
      <Tab.Screen name={NavigationStrings.FOOT} component={FootScreen} />

      <Tab.Screen name={NavigationStrings.MAP} component={MapScreen} />

      <Tab.Screen
        name={NavigationStrings.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.homeIconContainer}>
              <View className="relative" style={[styles.homeIcon]}>
                {getTabBarIcon(NavigationStrings.HOME, focused, wp(6), 'white')}
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={NavigationStrings.NOTIFICATION}
        component={NotificationScreen}
      />

      {/* <Tab.Screen
        name={NavigationStrings.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.homeIconContainer}>
              <View className="relative" style={[styles.homeIcon]}>
                {getTabBarIcon(NavigationStrings.HOME, focused, wp(6), 'white')}
              </View>
            </View>
          ),
        }}
      /> */}

      <Tab.Screen name={NavigationStrings.NETWORK} component={NetworkScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigationStack;

const styles = StyleSheet.create({
  homeIconContainer: {
    position: 'absolute',
    bottom: hp(1), // Push the cart icon slightly above other tabs
    width: wp(12),
    height: wp(13.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6), // Circular icon
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', // Default background color
    elevation: 5, // For a shadow effect on Android
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
