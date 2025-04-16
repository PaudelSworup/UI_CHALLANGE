import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Categories from './Categories';
import Cards from './Cards';
import CulturalCards from './CulturalCards';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Sunset View',
    description: 'A beautiful sunset over the hills.',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=800&q=80',
    name: 'Mountain Peaks',
    description: 'Snow-covered mountains under the blue sky.',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    name: 'Calm Lake',
    description: 'Reflection of trees in a quiet lake.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    name: 'City Lights',
    description: 'A bustling city at night full of lights.',
  },
];

const EcoScreen = () => {
  return (
    <SafeAreaView className="h-full">
      <Categories />

      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <View className="mr-3 ">
              <Cards
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </View>
          )}
        />
      </View>

      <View className="flex-row justify-between mx-5 mt-3 items-center">
        <Text>Cultural Tips</Text>

        <Text className="text-gray-600 font-light text-sm">
          {`show More >`}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 50}}
        renderItem={({item}) => (
          <View>
            <CulturalCards
              image={item.image}
              name={item.name}
              description={item.description}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default EcoScreen;
