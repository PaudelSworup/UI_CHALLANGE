import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Cards from './Cards';

const Network = () => {
  return (
    <SafeAreaView>
      <View className="h-full bg-white">
        <Text className="text-center">Leaderboard</Text>
        <View className="flex-row justify-between p-3 ">
          <Text>#1</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2583/2583344.png',
            }}
            height={20}
            width={20}
          />
          <Text>James Bond</Text>

          <Text>$1,000, 000</Text>
        </View>

        <View className="flex-row justify-between p-3 ">
          <Text>#2</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2583/2583319.png',
            }}
            height={20}
            width={20}
          />
          <Text>Tom Cruise</Text>

          <Text>$9,00,000</Text>
        </View>

        <View className="flex-row justify-between p-3 ">
          <Text>#3</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2583/2583434.png',
            }}
            height={20}
            width={20}
          />
          <Text>Tony Stark</Text>

          <Text>$800, 000</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Network;
