import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SunIcon} from 'react-native-heroicons/outline';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [cat, setCat] = useState(['Accomodation', 'Activity', 'Hotel', 'Food']);
  const GridItem: React.FC<{item: any; index: number}> = React.memo(
    ({item, index}) => (
      <TouchableOpacity
        className={`rounded-xl px-3 py-1 ${
          selectedCategory === index ? 'bg-[#154b3f] ' : 'bg-black/80'
        } mx-1.5 mt-0.5`}
        onPress={() => setSelectedCategory(index)}
        style={{
          elevation: selectedCategory === index ? 10 : 0,
          shadowColor: 'black',
        }}>
        <Text
          className={`tracking-widest   ${
            selectedCategory === index ? 'text-white/70' : 'text-white/30'
          }`}
          style={{fontSize: hp(2), textTransform: 'uppercase'}}>
          {item}
        </Text>
      </TouchableOpacity>
    ),
  );

  return (
    <SafeAreaView>
      <View className="px-1.5 bg-white">
        <View className="py-3 px-3 gap-3 flex-row justify-between items-center">
          <Text className="text-black px-2" style={{fontSize: hp(2)}}>
            Categories
          </Text>
          <View className="flex-row items-center space-x-1 bg-slate-200 rounded-2xl px-2">
            <SunIcon color="red" />
            <Text>21°C</Text>
          </View>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={cat}
          keyExtractor={item =>
            'id-' + Date.now() + '--12' + Math.floor(Math.random() * 10000)
          }
          renderItem={({item, index}) => <GridItem item={item} index={index} />}
          contentContainerStyle={{padding: 5}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
